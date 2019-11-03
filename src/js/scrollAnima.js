import "../sass/style.scss";
import "imports-loader?define=>false!animation.gsap";
import "imports-loader?define=>false!debug.addIndicators";
import "../img/yatch.svg";
import { TweenMax, TimelineMax, Power4 } from "gsap"; // Also works with TweenLite and TimelineLite
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems

let s = document.getElementById("S");
let c = document.getElementById("C");
let r = document.getElementById("R");
let o = document.getElementById("O");
let l1 = document.getElementById("L1");
let l2 = document.getElementById("L2");
let ship = document.getElementById("ship");

let tl = new TimelineMax({ repeat: -1, repeatDelay: 1, delay: 2.5 });
let tl2 = new TimelineMax({ repeat: -1 });
// tl2
//   .to(ship, 10, {
//     bezier: {
//       curviness: 1.25,
//       values: [{ x: "20vw", y: "-10vh" }]
//     },
//     autoRotate: true,
//     ease: Power1.easeInOut
//   })
//   .to(ship, 10, {
//     bezier: {
//       curviness: 1.25,
//       values: [{ x: "0vw", y: "0vh" }]
//     },
//     autoRotate: true,

//     ease: Power1.easeInOut
//   });

tl.from(s, 0.3, { y: -100, opacity: 0 })
  .to(s, 0.3, { y: 100, opacity: 0 })
  .from(c, 0.3, { y: -100, opacity: 0 })
  .to(c, 0.3, { y: 100, opacity: 0 })
  .from(r, 0.3, { y: -100, opacity: 0 })
  .to(r, 0.3, { y: 100, opacity: 0 })
  .from(o, 0.3, { y: -100, opacity: 0 })
  .to(o, 0.3, { y: 100, opacity: 0 })
  .from(l1, 0.3, { y: -100, opacity: 0 })
  .to(l1, 0.3, { y: 100, opacity: 0 })
  .from(l2, 0.3, { y: -100, opacity: 0 })
  .to(l2, 0.3, { y: 100, opacity: 0 });
