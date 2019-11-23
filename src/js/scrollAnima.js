import "../sass/style.scss";
import "imports-loader?define=>false!animation.gsap";
import "imports-loader?define=>false!debug.addIndicators";
import "../img/yatch.svg";
import { TweenMax, TimelineMax,Power2, Power4, CubicIn } from "gsap"; // Also works with TweenLite and TimelineLite

let letter = document.querySelectorAll(".letter");
let checkIn = document.querySelector(".users-checkin-btn")

let tl = new TimelineMax({repeat: -1, paused: true });
let btn = new TimelineMax({ repeat: -1, repeatDelay: 3, paused: true});
let pulse = new TimelineMax({repeat: -1, repeatDelay: 1, paused: true});

  tl.set(letter, {opacity: 0}).staggerTo(letter, 1, {y: 200, opacity: 1, yoyo:true, repeat:1, ease:Power4.easeIn}, 0.2);

  btn.to(checkIn, .4, {rotationY:180, ease:Power2.easeIn}).to(".users-checkin-btn", .4, {rotationY:0, ease:Power2.easeIn}, "+=3");
  
  pulse.to(checkIn, 1, {scale: 1.5, yoyo: true, repeat: 1})



  checkIn.addEventListener("mouseenter", function( event ) {   
    // highlight the mouseenter target
    btn.pause();
    pulse.play();
    // reset the color after a short delay
    
  }, false);

  checkIn.addEventListener("mouseleave", function( event ) {   
    // highlight the mouseenter target
    btn.play();
    pulse.restart().pause();
    
    // reset the color after a short delay
    
  }, false);

  function anime(){
    tl.play();
    btn.play();
}
anime()