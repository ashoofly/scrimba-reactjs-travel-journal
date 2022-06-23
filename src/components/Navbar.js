import React from "react";
import '../styles.css';
import earth from '../images/earth.png';
export default function Navbar() {

  return (
    <nav>
      <img src={earth} alt="earth-symbol" />
      <h3 className="site-title">my travel journal.</h3>
    </nav>
  );
}