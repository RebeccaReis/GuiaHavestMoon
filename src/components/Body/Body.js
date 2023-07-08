import React from "react";

import logo from "../../images/logo.png";
import placa from "../../images/placa.webp";
import start from "../../images/start.png";
import personagem from "../../images/personagem.webp";

import "../Body/Body.css";

const Body = () => {
  return (
           <div className="body-div">
              <div className="box-content">
                    <div className="logo-container"><img className="logo" src={logo}/></div>
                    <div className="placa-container">
                        <img className="placa" src={placa}/ >
                            <img className="start" src={start}/>
                            <img className="personagem" src={personagem}/>
                    </div>
              </div>
           </div>
  )
}

export default Body;
