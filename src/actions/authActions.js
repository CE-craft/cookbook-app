import firebase from "firebase/app";
import { firebaseData } from "../firebase/firebase";
//import { createUserWithEmailAndPassword } from "firebase/auth";

export const login = (uid) => ({ type: "LOGIN", uid });

export const startLogin = (user) => {
  const { email, password } = user;

  return async (dispatch) => {
    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const loggedUser = userCredential.user;
      dispatch(login(loggedUser.uid));
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = "Connot use those credentials";
      console.log(errorCode, errorMessage);
    }
  };
};

export const logout = () => ({ type: "LOGOUT" });

export const requestAccountCreation = (user) => {
  const { email, password } = user;
  return async () => {
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      const user = await userCredential.user;
      const uid = user.uid;

      const addedUser = await firebaseData.ref(`users`).push({
        ids: { uid, email },
        meals: {
          breakfast: { recipes: "recipe" },
          launch: { recipes: "recipe" },
          dinner: { recipes: "recipe" },
        },
      });

      /////////////////////////////////////////////////////////////////////////////////////////////////
      /* ****************************CHANGE PUSH ID TO USER ID******************************* */

      const usersRef = await firebaseData.ref(`users`);
      const usersRefSnapshot = await usersRef
        .child(addedUser.key)
        .once("value");
      const currentUsers = usersRefSnapshot.val();

      const userData = {};
      userData[addedUser.key] = null;
      userData[uid] = currentUsers;
      await usersRef.update(userData);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = "Connot use those credentials";
      console.log(errorCode, errorMessage);
    }
  };
};

export const startLogout = async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.log(error, "coudnt Logout");
  }
};
