import React, { useRef, useState } from "react";
import "./SignupScreen.css";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function SignupScreen() {
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        if (error) {
          alert(
            "Incorrect Credentials. Please enter valid Email and Password!"
          );
        }
      });

    emailRef.current.value = "";
    passwordRef.current.value = "";

    navigate("/");
  };

  const register = (event) => {
    event.preventDefault();

    if (signIn) {
      auth
        .createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((authUser) => {
          console.log(authUser);
        })
        .catch((error) => {
          if (error) {
            alert(
              "Please enter valid Email and Password(atleast 6 characters) to Sign up."
            );
          }
        });

      emailRef.current.value = "";
      passwordRef.current.value = "";

      navigate("/");
    }
  };

  return (
    <div className="signupScreen">
      <form>
        <h1> {signUp ? "Sign Up" : "Sign In"}</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />

        <button type="submit" onClick={signUp ? register : signIn}>
          {signUp ? "SIGN UP" : "Sign In"}
        </button>
        {signUp && (
          <p className="signupScreen__gray--new" onClick={signIn}>
            Already a user? Sign In
          </p>
        )}
        {!signUp && (
          <h4>
            <span className="signupScreen__gray">New to Netflix? </span>
            <span
              className="signupScreen__link"
              onClick={() => setSignUp(true)}
            >
              Sign Up now.
            </span>
          </h4>
        )}
      </form>
    </div>
  );
}

export default SignupScreen;
