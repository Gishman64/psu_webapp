import React from "react";

const ListElement = (props) => {
    return (
        <li id={props.value.id}
            style={{
                backgroundColor: "lightgray",
                borderRadius: 3,
                margin: 4,
                maxWidth:100
            }}>
            {props.value.value}
        </li>
    )
}

export default ListElement;