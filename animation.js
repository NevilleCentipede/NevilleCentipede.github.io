import {animate, stagger} from "./anime.esm.min.js";
import * as ui from "./ui.js";
export function animateNow (){
animate(ui.rectangle1, {
  x: 300,
  duration: 1000,
  alternate: true,
  loop: Infinity,
  rotate:360
});
animate(ui.rectangle2, {
  x: 300,
  y: 300,
  duration: 1000,
  alternate: true,
  loop: Infinity,
  rotate:180
});
}
