import React from "react";

function Header() {
    return (
        <header>
            <div className="NavBar">
                <div className="NavLogo">
                    <h1> Mi Carita </h1>
                </div> 
                <ul>
                    <li> <a href = "#" > Home </a></li>
                    <li > <a href = "#" > Productos </a></li>
                    <li > <a href = "#" > Noticias </a></li>
                    <li > <a href = "#" > Contacto </a></li>
                </ul> 
            </div>
        </header>
    );
}

export default Header;