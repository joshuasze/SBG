const photoModules = import.meta.glob(
  [
    "./photos/*.{jpg,jpeg,png,webp,avif}",
    "./photos/*.{JPG,JPEG,PNG,WEBP,AVIF}",
  ],
  { eager: true, query: "?url", import: "default" }
);

const photos = Object.fromEntries(
  Object.entries(photoModules).map(([path, url]) => {
    const fileName = path.split("/").pop();
    const key = fileName.replace(/\.(jpg|jpeg|png|webp|avif)$/i, "");

    return [key, url];
  })
);

const preloadedUrls = new Set();
const preloadPromises = new Map();

function getOrderedSlidePhotoUrls() {
  return Object.entries(photos)
    .filter(([key]) => /^slide-\d+$/i.test(key))
    .sort(([a], [b]) => {
      const aNum = Number(a.split("-")[1]);
      const bNum = Number(b.split("-")[1]);
      return aNum - bNum;
    })
    .map(([, url]) => url);
}

function scheduleWhenIdle(task) {
  if (typeof window === "undefined") return;

  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(task, { timeout: 1200 });
    return;
  }

  window.setTimeout(task, 32);
}

function preloadUrl(url, fetchPriority = "low") {
  if (!url || typeof window === "undefined" || typeof Image === "undefined") {
    return Promise.resolve(false);
  }

  if (preloadedUrls.has(url)) return Promise.resolve(true);
  if (preloadPromises.has(url)) return preloadPromises.get(url);

  const promise = new Promise((resolve) => {
    const img = new Image();
    img.decoding = "async";

    if ("fetchPriority" in img) {
      img.fetchPriority = fetchPriority;
    }

    const done = (ok) => {
      if (ok) preloadedUrls.add(url);
      preloadPromises.delete(url);
      resolve(ok);
    };

    img.onload = () => done(true);
    img.onerror = () => done(false);
    img.src = url;

    if (typeof img.decode === "function") {
      img.decode().catch(() => {});
    }
  });

  preloadPromises.set(url, promise);
  return promise;
}

export function preloadSlidePhotos(slideIndexes = []) {
  const urls = slideIndexes
    .map((index) => getSlidePhoto(index))
    .filter(Boolean);

  urls.forEach((url, position) => {
    scheduleWhenIdle(() => {
      const priority = position === 0 ? "high" : "low";
      preloadUrl(url, priority);
    });
  });
}

export function preloadAllSlidePhotosInBackground(currentSlide = 0) {
  if (typeof window === "undefined") return;

  const saveData = window.navigator?.connection?.saveData;
  const orderedUrls = getOrderedSlidePhotoUrls();
  const currentUrl = getSlidePhoto(currentSlide);

  // Respect data saver mode and keep network usage minimal.
  if (saveData) {
    const nextUrls = [
      currentUrl,
      getSlidePhoto(currentSlide + 1),
      getSlidePhoto(currentSlide + 2),
    ].filter(Boolean);

    nextUrls.forEach((url, position) => {
      scheduleWhenIdle(() => {
        const priority = position === 0 ? "high" : "low";
        preloadUrl(url, priority);
      });
    });

    return;
  }

  const prioritized = currentUrl
    ? [currentUrl, ...orderedUrls.filter((url) => url !== currentUrl)]
    : orderedUrls;

  // Stagger the queue so downloads happen in the background and don't block input.
  prioritized.forEach((url, index) => {
    scheduleWhenIdle(() => {
      const priority = index === 0 ? "high" : "low";
      preloadUrl(url, priority);
    });
  });
}

export function getPhoto(name) {
  return photos[name] ?? null;
}

export function getSlidePhoto(slideIndex) {
  return getPhoto(`slide-${slideIndex}`);
}

export default photos;
