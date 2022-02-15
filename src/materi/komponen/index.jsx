import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionComponent from "./pembahasan/FunctionComponent";

export default class Komponen extends React.Component {

    render() {
        return (
            <div>
                <ClassComponent nama="Gama Prabowo" hobi="Riding" />
                <br />
                <FunctionComponent nama="Gama Prabowo" hobi="Riding" umur={19} />
            </div>
        )
    }
}

