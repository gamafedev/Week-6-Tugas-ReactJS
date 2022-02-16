import React from "react";
import MenuHeader from "./Komponen/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderContent from "./Komponen/Header";
import ContentBiografi from "./Komponen/Content";
import ContactMe from "./Komponen/Contact";

function Portfolio() {
    return (
        <div>
            <MenuHeader />
            <HeaderContent />
            <ContentBiografi />
            <ContactMe />
        </div>
    )
}

export default Portfolio;