import "./loginpage.css";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const LoginPage = (props) => {
  const [mode, setMode] = useState("login");
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const loginUser = async (formVals) => {
    try {
      const auth = getAuth();
      const loginUser = await signInWithEmailAndPassword(
        auth,
        formVals.user,
        formVals.password
      );
      history.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async (formVals) => {
    const auth = getAuth();

    try {
      const signUp = await createUserWithEmailAndPassword(
        auth,
        formVals.user,
        formVals.password
      );
      history.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return(
  <div className="login-container">
      {mode ==="login" && (
          <form className="form" onSubmit={handleSubmit(loginUser)}>



              
          </form>
      )}
  </div>)
};
