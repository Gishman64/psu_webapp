import React from "react";
import ListElement from "./CustomElement";

const ListComponent = (props) => {
    let container = [];
    for (let val of props.array) {
        container.push(<ListElement value={val}/>);
    }
    return <div align={"center"}>{container}</div>;
}

export default ListComponent;