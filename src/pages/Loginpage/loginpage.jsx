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
  const [loginError, setLoginError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const history = useHistory();

  const loginUser = async (formVals) => {
    try {
      const auth = getAuth();
      const loginUser = await signInWithEmailAndPassword(
        auth,
        formVals.user,
        formVals.password
      );
      localStorage.setItem('user', formVals.user);
      setLoginError(false);
      history.push("/home");
    } catch (error) {
      setLoginError(true);
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
    } catch (error) {}
  };

  return (
    <div className="login-container">
      {mode === "login" && (
        <form className="form" onSubmit={handleSubmit(loginUser)}>
          <h1>Sign in to Pixel Perfect</h1>
          <br />

          {loginError === true && (
            <p className="error-message">
              The email or password entered is incorrect
            </p>
          )}
          <label htmlFor="user">Email</label>
          <input
            className="login-input"
            type="email"
            name="user"
            required
            {...register("user")}
          />

          <label htmlFor="password">Password</label>
          <input
            className="login-input"
            type="password"
            name="password"
            required
            {...register("password")}
          />

          <input className="login-cta" type="submit" value="Sign in" />
          <br />

          <p>Create an account here!</p>
          <button className="login-buttons" onClick={() => setMode("signup")}>
            Sign Up
          </button>
        </form>
      )}
      {mode === "signup" && (
        <form className="form" onSubmit={handleSubmit(signUp)}>
          <h1>Sign up to Pixel Perfect</h1>
          <br />

          <label htmlFor="user">Email</label>
          <input
            className="login-input"
            type="email"
            name="user"
            {...register("user", {
              required: true,
            })}
          />

          <label htmlFor="password">Password</label>
          <input
            className="login-input"
            type="password"
            name="password"
            {...register("password", {
              required: true,
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            className="login-input"
            type="password"
            name="passwordConfirm"
            required
            {...register("passwordConfirm", {
              validate: (value) =>
                value === getValues().password || "The passwords must match",
            })}
          />

          {errors.passwordConfirm && (
            <p className="error-message">{errors.passwordConfirm.message}</p>
          )}

          <input className="login-cta" type="submit" value="Sign Up" />
          <br />
          <p>Have an account?</p>
          <button className="login-buttons" onClick={() => setMode("login")}>
            Sign in
          </button>
        </form>
      )}
    </div>
  );
};
