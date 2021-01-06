import React from "react";

const fecha = new Date().getFullYear();



function Footer(){
    return(
        <footer><p>Copyright  © {fecha}</p></footer>
    );

}

export default Footer;