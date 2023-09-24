import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import "./App.css";
import Header from "./Header";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <div className="img-container">
        <img
          src="https://www.discover-airlines.com/en/assets/fleet/Discover_Airlines_A330-300_2_1800x1200.jpg"
          className="img-plane"
        />
      </div>
      <div className="footer">
        <p>Footer contents here</p>
      </div>
    </div>
  );
};

export default withRouter(Home);
