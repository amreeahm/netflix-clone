import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEMgMeenuPRw7ydOjduaxHmEifZQGPhio",
  authDomain: "netflix-clone-2dd61.firebaseapp.com",
  projectId: "netflix-clone-2dd61",
  storageBucket: "netflix-clone-2dd61.appspot.com",
  messagingSenderId: "828104469180",
  appId: "1:828104469180:web:caa9eac15a9d83bae43eb9",
};

const firesbaseApp = firebase.initializeApp(firebaseConfig);
const db = firesbaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
