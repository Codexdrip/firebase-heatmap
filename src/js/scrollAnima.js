import "../sass/style.scss";
import "imports-loader?define=>false!animation.gsap";
import "imports-loader?define=>false!debug.addIndicators";
import "../img/yatch.svg";
import { TweenMax, TimelineMax,Power2, Power4, CubicIn } from "gsap"; // Also works with TweenLite and TimelineLite
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems

let letter = document.querySelectorAll(".letter");
let checkIn = document.querySelector("#checkin")

let tl = new TimelineMax({repeat: -1, paused: true });
let btn = new TimelineMax({repeat: 3, paused: true})

tl.set(letter, {opacity: 0}).staggerTo(letter, 1, {y: 200, opacity: 1, yoyo:true, repeat:1, ease:Power4.easeIn}, 0.2);

btn
.to(checkIn, .1, {x: -40}).to(checkIn, .1, {x: 40}).to(checkIn, .1, {x: 0});

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