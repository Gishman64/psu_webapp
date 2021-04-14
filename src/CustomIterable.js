import React from "react";
import ListElement from "./CustomElement";

const ListComponent = (props) => {
    return <div align={"center"}>{props.array.map(el => <ListElement value={el}/>)}</div>;
}

export default ListComponent;