import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBIlO0KJcppvT88VQ51H7-f5_NsBI8Xr_o",
  authDomain: "kris-clothing-db.firebaseapp.com",
  databaseURL: "https://kris-clothing-db.firebaseio.com",
  projectId: "kris-clothing-db",
  storageBucket: "",
  messagingSenderId: "299627254163",
  appId: "1:299627254163:web:badf3b6361099902af1866"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
