import logo from './logo.svg';
import './App.css';
import './CustomIterable'
import React from "react";
import ListComponent from "./CustomIterable";

function App() {
    const arr = [
        {id:"1", value:"Element 1"},
        {id:"2", value:"Element 2"},
        {id:"3", value:"Element 3"}
    ];
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <ListComponent array={arr}/>
        </div>
    );
}

export default App;
