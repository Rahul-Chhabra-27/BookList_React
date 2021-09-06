import React from "react";
import { useDispatch } from "react-redux";
import { uiAction } from "../store/UI-slice";

const Header = ({ style }) => {
  const text = style.text;
  const color = style.color;

  const dispatch = useDispatch();

  const toggleButtonHandler = () => {
    dispatch(uiAction.toggleShowHandler());
  };
  return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="about.html" className="nav-link active" aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="about.html" className="nav-link">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a href="about.html" className="nav-link">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href ="about.html" className="nav-link">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="about.html" className="nav-link">
            About
          </a>
        </li>
      </ul>
      <button
        onClick={toggleButtonHandler}
        style={{ backgroundColor: color, padding: "20px" }}
        className="btn btn-primary"
      >
        {text}
      </button>
    </header>
  );
};
export default Header;
