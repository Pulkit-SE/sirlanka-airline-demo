import React from "react";
import { withRouter } from 'react-router-dom';

import "./App.css";
import Header from "./Header";

const Plan = () => {
  return (
    <div className="App">
      <Header />
      <div className="img-container">
        <p>Plan And Book Screen</p>
      </div>
      <div className="footer">
        <p>Plan Footer contents here</p>
      </div>
    </div>
  );
};

export default withRouter(Plan);

