import { AnimeParams } from "animejs";

export const fadeInAndScaleUp: AnimeParams = {
  opacity: [0, 1],
  scaleY: [0.75, 1],
  translateY: [25, 0],
  duration: 1500,
  delay: 300,
  autoplay: false,
};

export const fadeInAndMoveUp: AnimeParams = {
  opacity: [0, 1],
  scale: [0.95, 1],
  translateY: [25, 0],
  duration: 1500,
  delay: 300,
  autoplay: false,
};

export const moveDown: AnimeParams = {
  opacity: [0, 1],
  translateY: [-550, 0],
  delay: 1000,
  autoplay: false,
  duration: 1500,
};
