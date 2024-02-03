import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../../Firebase";

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const firebaseauth = getAuth(app);

const FirebaseProvider = (props) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const UserSingup = async (email, password) => {
    try {
      setError(null);
      const result = await createUserWithEmailAndPassword(
        firebaseauth,
        email,
        password
      );
      console.log("Successful login...", result);
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("Wrong email. Please check your email");
      } else if (error.code === "auth/weak-password") {
        setError("Wrong password. Please check your password");
      } else if (error.code === "auth/email-already-in-use") {
        setError("Email already used");
      } else {
        setError(error.message);
      }
    }
  };
  const LoginUsers = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(
        firebaseauth,
        email,
        password
      );
      console.log("Successful login...", result);
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        setError("Please check your email or password");
      } else if (error.code === "auth/invalid-email") {
        setError("Email or Password didn't fill");
      } else {
        setError(error.message);
      }
    }
  };

  useEffect(() => {
    onAuthStateChanged(firebaseauth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const LogOut = async () => {
    try {
      await signOut(firebaseauth);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const auths = getAuth();

  const photo = auths.currentUser;

  const photoBox = photo ? photo.email : null;
  const isLogged = user ? true : false;
  return (
    <FirebaseContext.Provider
      value={{
        UserSingup,
        LoginUsers,
        isLogged,
        LogOut,
        setError,
        error,
        photoBox,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
