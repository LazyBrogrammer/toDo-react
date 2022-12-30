import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
// import Components
import Footer from "./components/Footer";
import Main from "./components/Main";
const localData = JSON.parse(localStorage.getItem("jsonData"));
console.log("localData", localData);
const App = () => {
  const [theme, setTheme] = useState(true);
  const [data, setData] = useState(localData || []);
  localStorage.setItem("jsonData", JSON.stringify(data));
  return (
    <StyledApp style={{ background: `${theme ? "#fff" : "#171823"}` }}>
      <Main theme={theme} setTheme={setTheme} data={data} setData={setData} />
      <Footer data={data} setData={setData} theme={theme} />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export default App;
