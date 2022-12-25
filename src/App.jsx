import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
// import Components
import All from "./pages/All";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const localData = [
  {
    text: "charge phone",
    id: uuidv4(),
    completed: false,
  },
  {
    text: "Food",
    id: uuidv4(),
    completed: true,
  },
  {
    text: "read book",
    id: uuidv4(),
    completed: false,
  },
  {
    text: "buy new book",
    id: uuidv4(),
    completed: false,
  },
  {
    text: "get up early",
    id: uuidv4(),
    completed: true,
  },
];

// window.localStorage.setItem(localData, JSON.stringify(localData));
let parseData = JSON.parse(window.localStorage.getItem(localData));
console.log(parseData);
const App = () => {
  const [theme, setTheme] = useState(true);
  const [data, setData] = useState(localData);
  // let simpleData = JSON.parse(window.localStorage.getItem(localData));
  // console.log(data);
  return (
    <div className="App">
      <Main theme={theme} setTheme={setTheme} data={data} setData={setData} />
      <Footer />
    </div>
  );
};

export default App;
