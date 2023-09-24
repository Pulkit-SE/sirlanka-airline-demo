import React from "react";
import { withRouter } from 'react-router-dom';

import "./App.css";
import Header from "./Header";

const Travel = () => {
  return (
    <div className="App">
      <Header />
      <div className="img-container">
        <p>Travel Screen</p>
      </div>
      <div className="footer">
        <p>Travel Footer contents here</p>
      </div>
    </div>
  );
};

export default withRouter(Travel);

