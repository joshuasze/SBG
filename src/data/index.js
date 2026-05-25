// Import the presenter and audience view for each slide
import { getSlidePhoto } from "../assets/photos.js";
import { PresenterSlide as P0, AudienceSlide as A0 } from "./slide0.jsx";
import { PresenterSlide as P1, AudienceSlide as A1 } from "./slide1.jsx";
import { PresenterSlide as P2, AudienceSlide as A2 } from "./slide2.jsx";
import { PresenterSlide as P3, AudienceSlide as A3 } from "./slide3.jsx";
import { PresenterSlide as P4, AudienceSlide as A4 } from "./slide4.jsx";
import { PresenterSlide as P5, AudienceSlide as A5 } from "./slide5.jsx";
import { PresenterSlide as P6, AudienceSlide as A6 } from "./slide6.jsx";
import { PresenterSlide as P7, AudienceSlide as A7 } from "./slide7.jsx";
import { PresenterSlide as P8, AudienceSlide as A8 } from "./slide8.jsx";
import { PresenterSlide as P9, AudienceSlide as A9 } from "./slide9.jsx";
import { PresenterSlide as P10, AudienceSlide as A10 } from "./slide10.jsx";
import { PresenterSlide as P11, AudienceSlide as A11 } from "./slide11.jsx";
import { PresenterSlide as P12, AudienceSlide as A12 } from "./slide12.jsx";

// Each entry = one slide
// presenterView = what the presenter sees on their screen
// audienceView  = what the audience sees on their devices
const slides = [
  { id: 0, photo: getSlidePhoto(0), presenterView: P0, audienceView: A0 },
  { id: 1, photo: getSlidePhoto(1), presenterView: P1, audienceView: A1 },
  { id: 2, photo: getSlidePhoto(2), presenterView: P2, audienceView: A2 },
  { id: 3, photo: getSlidePhoto(3), presenterView: P3, audienceView: A3 },
  { id: 4, photo: getSlidePhoto(4), presenterView: P4, audienceView: A4 },
  { id: 5, photo: getSlidePhoto(5), presenterView: P5, audienceView: A5 },
  { id: 6, photo: getSlidePhoto(6), presenterView: P6, audienceView: A6 },
  { id: 7, photo: getSlidePhoto(7), presenterView: P7, audienceView: A7 },
  { id: 8, photo: getSlidePhoto(8), presenterView: P8, audienceView: A8 },
  { id: 9, photo: getSlidePhoto(9), presenterView: P9, audienceView: A9 },
  { id: 10, photo: getSlidePhoto(10), presenterView: P10, audienceView: A10 },
  { id: 11, photo: getSlidePhoto(11), presenterView: P11, audienceView: A11 },
  { id: 12, photo: getSlidePhoto(12), presenterView: P12, audienceView: A12 },
];

export default slides;
