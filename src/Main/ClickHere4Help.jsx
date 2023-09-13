import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const ClickHere4Help = () => {
  return (
    <div>
      <div className="navbar-container">
        <h1>Depression Test</h1>
      </div>
      <div className="congrats-sandra">
        <p>
          After careful evaluation, it appears that you are experiencing
          symptoms of depression. Please know that we are here to support you
          and discuss potential treatment options.
        </p>
      </div>
      <div className="end-section">
        <Link to="/">
          {" "}
          <button className="end-section-btn">End session</button>
        </Link>
      </div>
      <Link to="/SignInPage/Submit/EndSection/ClickHere4Help/SeekHelp">
        <p className="click-help">Click here to seek help</p>
      </Link>
    </div>
  );
};

export default ClickHere4Help;
