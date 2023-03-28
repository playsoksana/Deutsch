import React, { useEffect, useState } from "react";

import Container from "./components/Container/Container";




import './App.css';

import verb from "./words/verb";
import substantiv from "./words/substantiv";


function App() {
  const [type, setType] = useState("verb");


  const getList = () => {
    const listByType = type === "verb" ? verb : substantiv;
    if (localStorage.getItem("items")) {
      var storedNames = JSON.parse(localStorage.getItem("items"));
      return listByType.filter(e => !storedNames.includes(e.id));
    }
    return listByType
  }


  const splitList = [...getList()].reduce((acc, e, i) => {
    if (i === 0 || i % 10 === 0) {
      acc.push([]);
    }
    acc[acc.length - 1].push(e)
    return acc;
  }, []);


  const firstCol = [...splitList].map((arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
  }).flat();

  const secondCol = [...splitList].map((arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
  }).flat();

  const deleteWorld = (index) => {
    if (localStorage.getItem("items")) {
      var storedNames = JSON.parse(localStorage.getItem("items"));
      storedNames.push(index);
      localStorage.setItem('items', JSON.stringify(storedNames));
      return;
    }
    localStorage.setItem('items', JSON.stringify([index]));
  }


  return (
    <div className="App">
      <ul>
        <button className="btn" onClick={() => { setType("verb") }}>Verb</button>
        <button className="btn" onClick={() => { setType("substantiv") }}>Substantiv</button>
      </ul>
      <Container a={firstCol} b={secondCol} deleteWorld={deleteWorld} />
    </div>
  );
}

export default App;
