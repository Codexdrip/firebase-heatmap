import { firebaseConfig } from "../../utils/utils";
import * as firebase from "firebase";
const axios = require("axios");

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
let ip = {};
let i = 0;
let docRef = firestore.collection("ipinfo");
let checkinBtn = document.querySelector("#checkin");
/**
 * Data object to be written to Firebase.
 */
let data = {
  sender: null,
  timestamp: null,
  lat: null,
  lng: null
};

const saveToFirestore = function() {
  let val = {
    test: `test${i}`
  };
  docRef.add(val).then(ref => {
    console.log("Added document with ID: ", ref);
    i = i + 1;
  });
};

const makeReq = async function() {
  let info = await axios.get(
    `https://us-central1-ip-checkin-1571670157074.cloudfunctions.net/app`
  );
  ip = { ...ip, ...info.data };
  let displayInfo = document.querySelector("#ip-info");
  displayInfo.innerText = `${ip.country_code}, ${ip.region_name}?`;
};

const initMap = () => {
  let map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 2,
    backgroundColor: "pink",

    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        elementType: "geometry.stroke",
        stylers: [
          {
            lightness: 5
          },
          {
            weight: 4.5
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#c7e2dd"
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1a3646"
          },
          {
            weight: 3.5
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#4b6878"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#64779e"
          }
        ]
      },
      {
        featureType: "administrative.neighborhood",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative.province",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#4b6878"
          }
        ]
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#334e87"
          }
        ]
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [
          {
            color: "#023e58"
          }
        ]
      },
      {
        featureType: "poi",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#283d6a"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#6f9ba5"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#023e58"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#3C7680"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#304a7d"
          },
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#98a5be"
          },
          {
            weight: 8
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        featureType: "road.arterial",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#2c6675"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#255763"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#b0d5ce"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#023e58"
          }
        ]
      },
      {
        featureType: "road.local",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#98a5be"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1d2c4d"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#283d6a"
          }
        ]
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#3a4762"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#0e1626"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#4e6d70"
          }
        ]
      }
    ],
    disableDoubleClickZoom: true,
    streetViewControl: false,
    mapTypeControl: false
  });

  // Listen for clicks and add the location of the click to firebase.
  checkinBtn.addEventListener("click", function(e) {
    data.lat = ip.latitude;
    data.lng = ip.longitude;
    addToFirebase(data);
    saveToFirestore();
  });

  // Create a heatmap.
  let heatmap = new google.maps.visualization.HeatmapLayer({
    data: [],
    map: map,
    radius: 16,
    gradient: [
      "rgba(0, 255, 255, 0)",
      "rgba(0, 255, 255, 1)",
      "rgba(0, 191, 255, 1)",
      "rgba(0, 127, 255, 1)",
      "rgba(0, 63, 255, 1)",
      "rgba(0, 0, 255, 1)",
      "rgba(0, 0, 223, 1)",
      "rgba(0, 0, 191, 1)",
      "rgba(0, 0, 159, 1)",
      "rgba(0, 0, 127, 1)",
      "rgba(63, 0, 91, 1)",
      "rgba(127, 0, 63, 1)",
      "rgba(191, 0, 31, 1)",
      "rgba(255, 0, 0, 1)"
    ]
  });

  initAuthentication(initFirebase.bind(undefined, heatmap));
};

/**
 * Starting point for running the program. Authenticates the user.
 * @param {function()} onAuthSuccess - Called when authentication succeeds.
 */
function initAuthentication(onAuthSuccess) {
  firebase
    .auth()
    .signInAnonymously()
    .catch(
      function(error) {
        console.log(error.code + ", " + error.message);
      },
      { remember: "sessionOnly" }
    );

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      data.sender = user.uid;
      onAuthSuccess();
    } else {
      // User is signed out.
    }
  });
}

/**
 * Set up a Firebase with deletion on clicks older than expirySeconds
 * @param {!google.maps.visualization.HeatmapLayer} heatmap The heatmap to
 * which points are added from Firebase.
 */
function initFirebase(heatmap) {
  // 10 minutes before current time.
  let startTime = new Date().getTime() - 60 * 10 * 1000;
  // Reference to the clicks in Firebase.
  let clicks = firebase.database().ref("clicks");

  // Listen for clicks and add them to the heatmap.
  clicks
    .orderByChild("timestamp")
    .startAt(startTime)
    .on("child_added", function(snapshot) {
      // Get that click from firebase.
      let newPosition = snapshot.val();
      let point = new google.maps.LatLng(newPosition.lat, newPosition.lng);
      let elapsedMs = Date.now() - newPosition.timestamp;

      // Add the point to the heatmap.
      heatmap.getData().push(point);

      // Request entries older than expiry time (10 minutes).
      let expiryMs = Math.max(60 * 1 * 1000 - elapsedMs, 0);
      // Set client timeout to remove the point after a certain time.
      window.setTimeout(function() {
        // Delete the old point from the database.
        snapshot.ref.remove();
      }, expiryMs);
    });

  // Remove old data from the heatmap when a point is removed from firebase.
  clicks.on("child_removed", function(snapshot, prevChildKey) {
    let heatmapData = heatmap.getData();
    let i = 0;
    while (
      snapshot.val().lat != heatmapData.getAt(i).lat() ||
      snapshot.val().lng != heatmapData.getAt(i).lng()
    ) {
      i++;
    }
    heatmapData.removeAt(i);
  });
}

/**
 * Adds a click to firebase.
 * @param {Object} data The data to be added to firebase.
 *     It contains the lat, lng, sender and timestamp.
 */
function addToFirebase(data) {
  getTimestamp(function(timestamp) {
    // Add the new timestamp to the record data.
    data.timestamp = timestamp;
    let ref = firebase
      .database()
      .ref("clicks")
      .push(data, function(err) {
        if (err) {
          // Data was not written to firebase.
          console.warn(err);
        }
      });
  });
}

/**
 * Updates the last_message/ path with the current timestamp.
 * @param {function(Date)} addClick After the last message timestamp has been updated,
 *     this function is called with the current timestamp to add the
 *     click to the firebase.
 */
function getTimestamp(addClick) {
  // Reference to location for saving the last click time.
  let ref = firebase.database().ref("last_message/" + data.sender);

  ref.onDisconnect().remove(); // Delete reference from firebase on disconnect.

  // Set value to timestamp.
  ref.set(firebase.database.ServerValue.TIMESTAMP, function(err) {
    if (err) {
      // Write to last message was unsuccessful.
      console.log(err);
    } else {
      // Write to last message was successful.
      ref.once(
        "value",
        function(snap) {
          addClick(snap.val()); // Add click with same timestamp.
        },
        function(err) {
          console.warn(err);
        }
      );
    }
  });
}

function delay() {
  setTimeout(function() {
    initMap(); // This starts the script after page loads
  }, 200);
}

if (document.readyState == "complete") {
  delay();
} else {
  document.onreadystatechange = function() {
    if (document.readyState === "complete") {
      delay();
    }
  };
}

makeReq();
