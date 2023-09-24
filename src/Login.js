import React from "react";
import { withRouter } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import { useAuth } from "./hooks/useAuth";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const { login } = useAuth();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (!email.length || !password.length) {
      return setError("Please check email or password.");
    }
    login();
    setError("");
  };

  return (
    <div className="App">
      <Header />
      <div className="login">
        <input
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
          type="email"
          className="login-field"
        />
        <input
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
          type="password"
          className="login-field"
          required
        />
        <button style={{ width: "10%" }} onClick={handleLogin}>
          Sign In
        </button>
        <p className="error">{error}</p>
      </div>
      <div className="footer">
        <p>Footer contents here</p>
      </div>
    </div>
  );
};

export default withRouter(Login);
