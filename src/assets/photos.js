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

export function getPhoto(name) {
  return photos[name] ?? null;
}

export function getSlidePhoto(slideIndex) {
  return getPhoto(`slide-${slideIndex}`);
}

export default photos;
