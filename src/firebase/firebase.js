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

export const firebaseData = firebase.database();

export const realData = async () => {
  const data = await firebaseData.ref("users").once("value");

  return data;
};

export const getMealsData = async (uid) => {
  const data = await firebaseData.ref("users").once("value");

  let meals = {};
  data.forEach((user) => {
    if (user.key === uid) {
      return (meals = { ...user.val().meals });
    }
  });

  return meals;
};
