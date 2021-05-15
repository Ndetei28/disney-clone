import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDzEDbtfpEL-Sh3itXJESzuAqwUj5bSVQ",
    authDomain: "disney-clone-3ee35.firebaseapp.com",
    projectId: "disney-clone-3ee35",
    storageBucket: "disney-clone-3ee35.appspot.com",
    messagingSenderId: "985467658776",
    appId: "1:985467658776:web:9e4cd556d8dc1566a5996d",
    measurementId: "G-75WMEVEHPM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage =  firebase.storage();

export {auth, provider, storage};
export default db;
