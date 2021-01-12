import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";


function App (){
    return (
        <div>
            <Header />
            <ItemListContainer greeting={"Hola! Bienvenidx"} />
            <Footer />
        </div>
    );
}

export default App;