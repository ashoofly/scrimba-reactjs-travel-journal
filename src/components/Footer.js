import React from "react";
import scrimbaIcon from "../images/scrimba.svg"
export default function Footer() {
  return (
    <div>
      <small className="footer">
        Created with <i className="fa fa-solid fa-heart footer-heart-icon"></i> by <i className="fa footer-github-icon">&#xf09b;</i> <a className="footer-link" href="https://github.com/ashoofly/scrimba-reactjs-travel-journal" target="_blank" rel="noreferrer">ashoofly</a> for <img className="footer-scrimba-icon" src={scrimbaIcon} alt="scrimba-icon"></img> <a className="footer-link" href="https://scrimba.com/learn/learnreact" target="_blank" rel="noreferrer">Scrimba</a>
      </small>
    </div>
  );
}