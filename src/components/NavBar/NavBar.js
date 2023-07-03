import React, { useState } from "react";
import "../NavBar/NavBar.css";

function NavBar() {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };
  return (
    <nav>
      oi
      <a href="#" className="nav_brand">
        Portfolio
      </a>
      <ul className={active}>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Créditos
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Sobre o Jogo
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Repositório
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
export default NavBar;
