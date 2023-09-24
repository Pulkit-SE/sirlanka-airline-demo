import React from "react";

import logo from "./logo.png";
import "./App.css";
import history from "./history";
import { useAuth } from "./hooks/useAuth";

const Header = () => {
  const { logout, isLoggedIn } = useAuth();

  const handleNavigation = (screen) => {
    return () => {
      history.push(screen);
    };
  };

  const setLogout = () => {
    logout();
  };

  return (
    <div className="sub-app">
      <img
        src={logo}
        height={"40px"}
        width={"300px"}
        style={{ cursor: "pointer" }}
        onClick={handleNavigation("/")}
      />
      <div className="sub-img">
        <p onClick={handleNavigation("/")} className="header-links">
          HOME
        </p>
        <p onClick={handleNavigation("plan-and-book")} className="header-links">
          PLAN & BOOK
        </p>
        <p
          onClick={handleNavigation("travel-information")}
          className="header-links"
        >
          TRAVEL INFORMATION
        </p>
        <p onClick={handleNavigation("experience")} className="header-links">
          EXPERIENCE
        </p>
        <p onClick={handleNavigation("fly-smiles")} className="header-links">
          FLYSMILES
        </p>
      </div>
      <div>
        {isLoggedIn && (
          <p style={{ cursor: "pointer" }} onClick={setLogout}>
            Logout
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
