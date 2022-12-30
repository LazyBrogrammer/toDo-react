import React from "react";
import Header from "./Header";
// import Item from "./Item";
import All from "../pages/All";
import Completed from "../pages/Completed";
import Active from "../pages/Active";
import styled from "styled-components";

// react-router-dom
import { Switch, Route } from "react-router-dom";
const Main = ({ theme, setTheme, data, setData }) => {
  return (
    <StyledMain>
      <Header theme={theme} setTheme={setTheme} data={data} setData={setData} />
      <Switch>
        <Route path="/" exact>
          <All data={data} setData={setData} theme={theme}/>
        </Route>
        <Route path="/active">
          <Active data={data} setData={setData} />
        </Route>
        <Route path="/completed">
          <Completed data={data} setData={setData} />
        </Route>
      </Switch>
    </StyledMain>
  );
};

const StyledMain = styled.div`

`;
export default Main;
