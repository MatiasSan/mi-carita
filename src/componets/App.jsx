import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import ItemCount from "./ItemCount"


function App (){
    return (
        <div>
            <Header />
            <ItemListContainer greeting={"Hola! Bienvenidx"} />
            <ItemCount stock={10}/>
            <Footer />
        </div>
    );
}

export default App;