import React, { useState } from "react";
import "./Auth.css";
import icon from "../../asserts/study.png";
import AbouthAuth from "./AbouthAuth";
import { logIn, signUp } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {message} from 'antd';
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleService = () => {
    setIsSignUp(!isSignUp);
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      message.error("Enter your E-mail and password")
    }
    if (isSignUp) {
      if (!name) {
        message.error("Enter your display name to continue")
      }
      dispatch(signUp({ name, email, password }, navigate));  
    } else {
      dispatch(logIn({ email, password }, navigate));
    }
  };

  return (
    <section className="auth-section">
      {isSignUp && <AbouthAuth />}
      <div className="auth-container-2">
        {!isSignUp && (
          <img src={icon} alt="stackOver flow" className="login-logo" />
        )}
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <label htmlFor="name">
              <h3>Display Name</h3>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          )}
          <label htmlFor="email">
            <h3>Email :</h3>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Password :</h3>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
             {!isSignUp && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  forgot password ?
                </p>
              )}
            {isSignUp && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Password must contain atleast eight characters, including
                atleast 1 letter and 1 number
              </p>
            )}
          </label>
          {isSignUp && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ fontSize: "14px" }}>
                Opt-in to receive occasional product updates, user research
                invitations, company announcements, and digests.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {" "}
            {!isSignUp ? "Log In" : "Sign Up"}{" "}
          </button>
        </form>
        <p>
          {isSignUp ? "Already have an account? " : "Don't have an account?"}

          <button
            type="button"
            className="handle-serice-btn"
            onClick={handleService}
          >
            {isSignUp ? "Login In" : "Sign Up"}
          </button>
        </p>
        {isSignUp && (
          <p
            className="alredy-exist"
            style={{ color: "#666767", fontSize: "13px" }}
          >
            By clicking “Sign up”, you agree to our
            <span style={{ color: "#007ac6" }}>terms of service</span> and
            acknowledge that you have read and understand our{" "}
            <spna style={{ color: "#007ac6" }}>privacy policy </spna>and{" "}
            <span style={{ color: "#007ac6" }}>code of conduct</span>.
          </p>
        )}
      </div>
    </section>
  );
};

export default Auth;
