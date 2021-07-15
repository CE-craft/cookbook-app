import firebase from "firebase/app";
import { firebaseData, getUsersData } from "../firebase/firebase";
//import { createUserWithEmailAndPassword } from "firebase/auth";
import { catchError, hideError } from "../actions/errorActions";

export const login = (uid) => ({ type: "LOGIN", uid });

export const startLogin = (user) => {
  const { email, password } = user;

  return async (dispatch) => {
    try {
      const users = await getUsersData();

      let emailExists = true;
      users.forEach((user) => {
        if (user.email === email) return (emailExists = false);
      });
      if (emailExists)
        throw new Error("Your email does not exist please create an account");

      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const loggedUser = userCredential.user;
      dispatch(login(loggedUser.uid));
    } catch (error) {
      dispatch(catchError(error.message));
      setTimeout(() => dispatch(hideError()), 8000);
    }
  };
};

export const logout = () => ({ type: "LOGOUT" });

export const requestAccountCreation = (user) => {
  const { email, password } = user;

  return async (dispatch) => {
    try {
      // const users = await getUsersData();
      // let emailExists = false;
      // users.forEach((user) => {
      //   if (user.email === email) return (emailExists = true);
      // });
      // if (emailExists) {
      //   throw new Error("You already have an account please login instead");}

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
      console.log("AuthAction", error);

      // console.log(newError);
      // dispatch(catchError(error.message));
      // setTimeout(() => dispatch(hideError()), 8000);
      //throw error;
    }
  };
};

export const startLogout = async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.log(error, "couldnt Logout");
  }
};
