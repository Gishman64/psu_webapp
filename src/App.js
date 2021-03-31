import React, {useState} from "react";
import './App.css';
import './CustomIterable'
import ListComponent from "./CustomIterable";

function App() {
    const arr = [
        {id: "1", value: "Element 1"},
        {id: "2", value: "Element 2"},
        {id: "3", value: "Element 3"}
    ];

    return (
        <div className="App">
            <ListComponent array={arr}/>
            <Search arr={arr}/>
        </div>
    );
}

const Search = ({arr}) => {
    const [currentValue, setCurrentValue] = useState("");
    return (
        <>
            <input type="text" value={currentValue} onChange={(e) => setCurrentValue(e.target.value)}/>
            <div>
                {
                    currentValue ? arr.filter(el => {
                        currentValue.includes(el.value)
                        return el.value.includes(currentValue);
                    }).map(item => item.value) : arr.map(item => item.value)
                }
            </div>
        </>
    )
}

export default App;
