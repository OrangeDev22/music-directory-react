import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAiS2Pafdo6qeu6ru8bNfDRi6JO3oX6UfI",
  authDomain: "music-directory-bd85f.firebaseapp.com",
  databaseURL: "https://music-directory-bd85f-default-rtdb.firebaseio.com/",
  projectId: "music-directory-bd85f",
  storageBucket: "music-directory-bd85f.appspot.com",
  messagingSenderId: "59114652878",
  appId: "1:59114652878:web:4eb9edf916ca0931043c9f",
  measurementId: "G-FWGH6SW7GL",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
