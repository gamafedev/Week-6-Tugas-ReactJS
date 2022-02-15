import React from "react";

function FunctionComponent({ nama, hobi, umur }) {
    return (
        <div>
            <h1>Function Component</h1><br />
            <h2>Biodata</h2>
            <h3>Nama: {nama}</h3>
            <h3>Hobi: {hobi}</h3>
            <h3>umur: {umur}</h3>
        </div>
    )
}

export default FunctionComponent;