import React from "react";
import NavbarHeader from "./NavbarHeader";
import NewsContent from "./NewsContent";

export default class ReactNews extends React.Component {
    render() {
        return (
            <div>
                <NavbarHeader />
                <NewsContent />
            </div>
        )
    }
}