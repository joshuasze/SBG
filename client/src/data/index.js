// Import the presenter and audience view for each slide
import { PresenterSlide as P0, AudienceSlide as A0 } from "./slide0.jsx";
import { PresenterSlide as P1, AudienceSlide as A1 } from "./slide1.jsx";
import { PresenterSlide as P2, AudienceSlide as A2 } from "./slide2.jsx";

// Each entry = one slide
// presenterView = what the presenter sees on their screen
// audienceView  = what the audience sees on their devices
const slides = [
  { id: 0, presenterView: P0, audienceView: A0 },
  { id: 1, presenterView: P1, audienceView: A1 },
  { id: 2, presenterView: P2, audienceView: A2 },
];

export default slides;