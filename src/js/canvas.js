import "../sass/style.scss";
import "imports-loader?define=>false!animation.gsap";
import "imports-loader?define=>false!debug.addIndicators";
import { TweenMax, TimelineMax, Power4 } from "gsap"; // Also works with TweenLite and TimelineLite
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { firebaseConfig } from "../../utils/utils";
import * as firebase from "firebase";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const dynamicUsers = document.getElementById("dynamic-users");
const ipinfo = firestore.collection("ipinfo");

const roomToInsert = () => {
  // if card count is less than 5 return true
  //console.log(dynamicUsers);
  if (dynamicUsers.childElementCount < 5) {
    return true;
  } else {
    return false;
  }
};

// let getUpdates = function() {
//   ipinfo.onSnapshot(function(snapshot) {
//     console.log(snapshot.data);
//     let flag = snapshot.location.country_flag;
//     let text = "US, Alaska";
//     addElement(flag, text);
//   });
// };

const initialize = async () => {
  let data = await ipinfo.limit(5).get();

  data.forEach(function(snapshot) {
    addElement("http://assets.ipstack.com/flags/us.svg", snapshot.data().test);
  });

  ipinfo.onSnapshot(function(snap) {
    let last = snap.docChanges()[[snap.docChanges().length - 1]];
    if (snap.docChanges().length <= 0) {
      console.log("No data yet...");
    } else if (snap.docChanges().length > 1) {
      console.log("Nothing to do...");
    } else if (!roomToInsert()) {
      removeElm("http://assets.ipstack.com/flags/us.svg", last.doc.data().test);
    } else if (roomToInsert()) {
      addElement(
        "http://assets.ipstack.com/flags/us.svg",
        last.doc.data().test
      );
    }
  });
};

const addElement = (imgSrc, text) => {
  var newDiv = document.createElement("div");
  let imgElement = createImgElm(imgSrc);
  let h3Element = createH3Elm(text);

  newDiv.appendChild(imgElement);
  newDiv.appendChild(h3Element);
  newDiv.className += "current-user sm-card";
  dynamicUsers.appendChild(newDiv);
  TweenMax.from(newDiv, 2, { opacity: 0, x: 30, ease: Power4.easeOut });
};

const createImgElm = src => {
  var img = document.createElement("img");
  img.src = src;
  return img;
};

const createH3Elm = text => {
  var h3 = document.createElement("h3");
  h3.innerText = text;
  return h3;
};

const removeElm = (imgSrc, text) => {
  let firstElm = document.querySelector("#dynamic-users > .current-user");
  TweenMax.to(firstElm, 1, {
    opacity: 0,
    y: -15,
    display: "none",
    ease: Power4.easeOut,
    onComplete: function() {
      dynamicUsers.firstChild.remove();
      addElement(imgSrc, text);
    }
  });
};

initialize();
