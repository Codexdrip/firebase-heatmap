import "../sass/style.scss";
import "imports-loader?define=>false!animation.gsap";
import "imports-loader?define=>false!debug.addIndicators";
import { TweenMax, TimelineMax, Power4 } from "gsap"; // Also works with TweenLite and TimelineLite
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { firebaseConfig } from "./utils";
import * as firebase from "firebase";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();

const obj = document.getElementById("object");

var dbRed = firebase
  .database()
  .ref()
  .child("text");
dbRed.on("value", snap => (obj.innerText = snap.val()));

let docRef = firestore.doc("samples/currMsg");
let status = document.querySelector("#status");
let currMsg = document.querySelector("#currMsg");
let save = document.querySelector("#save");

save.addEventListener("click", function() {
  const textToSave = currMsg.value;
  docRef
    .set({
      currentMessage: textToSave
    })
    .then(() => {
      console.log("Saved!");
    })
    .catch(err => {
      console.log("error", err);
    });
});

let getUpdates = function() {
  docRef.onSnapshot(function(doc) {
    if (doc && doc.exists) {
      const myData = doc.data();
      status.innerText = myData.currentMessage;
    }
  });
};

getUpdates();
