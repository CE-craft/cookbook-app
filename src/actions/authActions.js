import firebase from "firebase/app";
import { firebaseData } from "../firebase/firebase";
//import { createUserWithEmailAndPassword } from "firebase/auth";

export const login = (user = {}) => ({ type: "LOGIN", user });

export const logout = () => ({ type: "LOGOUT" });

export const requestAccountCreation = (user) => {
  console.log(user);
  const { email, password } = user;
  return async () => {
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      const user = await userCredential.user;
      const uid = user.uid;

      await firebaseData.ref(`users`).push({ uid, email });

      // const data = await firebaseData.ref("users").once("value");
      // const snapUsers = data.val();

      // await firebaseData.ref("users").on("child_added", (snapshot) => {
      //   console.log(snapshot.key, snapshot.val());
      //   return { ...snapUsers };
      // });

      // const child = firebaseData.ref("users").child("43268jfjn7983-347983");
      // child.once("value", function (snapshot) {
      //   ref.child("somethingElse").set(snapshot.val());
      //   child.remove();
      // });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = "Connot use those credentials";
      console.log(errorCode, errorMessage);
    }
  };
};
