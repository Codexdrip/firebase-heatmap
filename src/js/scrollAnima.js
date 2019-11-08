import "../sass/style.scss";
import "imports-loader?define=>false!animation.gsap";
import "imports-loader?define=>false!debug.addIndicators";
import "../img/yatch.svg";
import { TweenMax, TimelineMax,Power2, Power4, CubicIn } from "gsap"; // Also works with TweenLite and TimelineLite
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems

let s = document.getElementById("S");
let c = document.getElementById("C");
let r = document.getElementById("R");
let o = document.getElementById("O");
let l1 = document.getElementById("L1");
let l2 = document.getElementById("L2");
let ship = document.getElementById("ship");
let scroll = document.querySelector(".scroll");
let checkIn = document.querySelector("#checkin")

let tl = new TimelineMax({repeat: -1, paused: true });
let btn = new TimelineMax({repeat: -1, paused: true})
// tl2
//   .to(ship, 10, {
//     bezier: {
//       curviness: 1.21,
//       values: [{ x: "20vw", y: "-10vh" }]
//     },
//     autoRotate: true,
//     ease: Power1.easeInOut
//   })
//   .to(ship, 10, {
//     bezier: {
//       curviness: 1.21,
//       values: [{ x: "0vw", y: "0vh" }]
//     },
//     autoRotate: true,

//     ease: Power1.easeInOut
//   });

  tl.set(".letter", {opacity: 0}).staggerTo(".letter", 1, {y: 200, opacity: 1, yoyo:true, repeat:1, ease:Power4.easeIn}, 0.2);

  btn
  .to(checkIn, .8, {rotation: -25, ease: Power2.ease})
  .to(checkIn,.8, {rotation: 35, ease: Power2.ease});




  checkIn.addEventListener("mouseenter", function( event ) {   
    // highlight the mouseenter target
    console.log("home")
    btn.play();
    // reset the color after a short delay
    
  }, false);

  checkIn.addEventListener("mouseleave", function( event ) {   
    // highlight the mouseenter target
   btn.restart().pause();
    
    // reset the color after a short delay
    
  }, false);

function anime(){
  tl.play();
  //tl.reverse(); 
}
anime()