import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import "./App.css";
import Header from "./Header";

const Experience = () => {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await fetch("https://gorest.co.in/public/v2/users").then(
      (response) => {
        return response.json();
      }
    );
    setUsers(res);
    console.log("res", res);
  };

  return (
    <div className="App">
      <Header />
      <div className="img-container">
        <p>See all the users testimonials</p>
      </div>
      <div className="footer">
        <p>Experience Footer contents here</p>
      </div>
    </div>
  );
};

export default withRouter(Experience);
