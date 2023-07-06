import React from "react";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
                <h4>Contato</h4>
                <a href="#">
                <p>Linkedin</p>
                </a>
                <a href="#">
                <p>GitHub</p>
                </a>
               
          </div>
          <div className="sb_footer-links-div">
              <h4>Links Úteis</h4>
               <a href="#">
                <p>Curriculo</p>
                </a>
                <a href="#">
                <p>Portfólio</p>
                </a>
          </div>
           <div className="sb_footer-links-div">
                <h4>Ferramentas</h4>
                <a href="#">
                <p>Html</p>
                </a>
                  <a href="#">
                <p>Css</p>
                </a>
            
          </div>
            <div className="sb_footer-links-div">
                <a href="#">
                <p>Javascript</p>
                </a>
                <a href="#">
                <p>React</p>
                </a>
            </div>
          <hr></hr>
          <div className="sb_footer-below">
              <div className="sb_footer-copyright">
                  <p>
                      @{new Date().getFullYear()} Codeinn. All right reserved
                  </p>
              </div>
              <div className="sb_footer-below-links"> 
                  <a href="#"><div><p>Terms & conditions</p></div></a>
                  <a href="#"><div><p>Privacy</p></div></a>
                  <a href="#"><div><p>Security</p></div></a>
                  <a href="#"><div><p>Cookie Declaration</p></div></a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
