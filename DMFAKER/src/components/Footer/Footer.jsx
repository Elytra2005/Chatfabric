import { useState } from "react";
import '../Footer/Footer.css'
const Footer = () => {
    const date = new Date();
    
    return (<>
      <footer> 
         <p>This applicaton is still in beta. Expect better ui overhaul and new platforms.</p>
         <p>© Copyright Chatfabric {date.getFullYear()} all rights reserved</p>
      </footer>
    </>)
}

export default Footer;