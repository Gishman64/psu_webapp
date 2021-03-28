import React from "react";
import ListElement from "./CustomElement";

const ListComponent = (props) => {
    return (
        <div align={"center"}>
            <ul>
                {props.array.map(val => {
                    return <ListElement value={val}/>
                })}
            </ul>
        </div>)
}

export default ListComponent;