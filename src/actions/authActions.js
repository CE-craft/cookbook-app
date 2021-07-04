import firebase from "../firebase/firebase";

export const signUp = () => ({ type: "SIGN_UP" });

export const login = () => ({ type: "LOGIN" });

export const logout = () => ({ type: "LOGOUT" });

export const requestAccountCreation = (email, password) => {
  return async (dispatch) => {
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const user = await userCredential.user;
      console.log(user);
      dispatch(signUp());
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = "Connot use those credentials";
    }
  };
};
