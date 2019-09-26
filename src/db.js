import firebase from "firebase/app";
import "firebase/firestore";
global.XMLHttpRequest = require("xhr2");

export const firebaseConfig = {
  apiKey: "AIzaSyD69US27AznPFrqCsvZHa8VpjjuefVqsVI",
  authDomain: "schubrakede.firebaseapp.com",
  databaseURL: "https://schubrakede.firebaseio.com",
  projectId: "schubrakede",
  storageBucket: "",
  messagingSenderId: "97550479182",
  appId: "1:97550479182:web:7caa071c795748defe381f"
};

export const db = firebase.initializeApp(firebaseConfig).firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore;
export { TimeStamp, GeoPoint };
