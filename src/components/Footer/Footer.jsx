import React from "react";
import ItemsContainer from "./ItemsContainer";

import { Icons } from "./Menus";
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer-main">

      <ItemsContainer />
      <div
        className="footer-last">
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        
      </div>
    </footer>
  );
};

export default Footer;
