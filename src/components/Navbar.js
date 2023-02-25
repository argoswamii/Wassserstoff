import React from "react";
import "../pages/BubbleChart.css";

const Navbar = () => {
  return (
    <div>
      <div className="navigation-bar">
        <div className="bg" />
        <div className="search">
          <input className="input" type="text" />
          <div className="icon">
            <img className="search-icon" alt="" src="../search.svg" />
          </div>
        </div>
        <div className="tab" />
        <div className="menu">
          <a href="/">
            <div className="label">Statistics</div>
          </a>
          <a href="/">
            <div className="label1">Overview</div>
          </a>
          <a href="/">
            <div className="label">Dashboard</div>
          </a>
          <a href="/">
            <div className="label">Analytics</div>
          </a>
        </div>
        <div className="profile">
          <img className="icon1" alt="" src="../icon.svg" />
        </div>
        <div className="option">
          <img className="icon2" alt="" src="../icon1.svg" />
        </div>
        <div className="logo">
          <img className="logo-icon" alt="" src="../logo.svg" />
          <div className="logo-text">WASSERSTOFF</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
