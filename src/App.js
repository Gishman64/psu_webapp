import React, {useEffect, useState} from "react";
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
    const [currentValue, setCurrentValue] = useState({filtered: [], input: ""});
    useEffect(() => {
        if (currentValue.filtered.length !== 0) {
            document.title = `Найдено ${currentValue.filtered.length} элементов`;
        } else {
            document.title = `UseEffect React hook example`;
        }
    })
    return (
        <>
            <input type="text" value={currentValue.input} onChange={
                (e) =>
                    setCurrentValue(() => {
                        let input = e.target.value;
                        let proceed = input ? arr.filter(el => el.value.includes(input)).map(item => item.value)
                            : arr.map(item => item.value);
                        return {filtered: proceed, input: input};
                    })
            }/>
            <div>
                {
                    currentValue.filtered
                }
            </div>
        </>
    )
};

export default App;
