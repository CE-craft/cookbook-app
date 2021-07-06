import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAJ2s-8yqSW_bh23GFoIXm45wnPC704cW8",
  authDomain: "cook-book-app-a4e92.firebaseapp.com",
  projectId: "cook-book-app-a4e92",
  storageBucket: "cook-book-app-a4e92.appspot.com",
  messagingSenderId: "523896409475",
  appId: "1:523896409475:web:7c7277e2454c6a28157ab6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const firebaseData = firebase.database();

// export const createAccount = async (email, password) => {
//   try {
//     const userCredential = await firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password);

//     const user = await userCredential.user;
//     const uid = user.uid;

//     await firebaseData.ref(`users`).push(uid);
//   } catch (error) {
//     const errorCode = error.code;
//     const errorMessage = "Connot use those credentials";
//   }
// };

const signIn = async (email, password) => {
  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    const user = await userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = "Wrong credentials";
  }
};

export const realData = async () => {
  const zbi = await firebaseData.ref("users").once("value");
  console.log(zbi.val());
};
