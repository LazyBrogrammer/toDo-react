import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Footer = ({ data, setData, theme }) => {
  let activeNumber = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].isComplete === false) {
      activeNumber += 1;
    }
  }
  const activeData = data.filter((item) => item.isComplete === false);
  const clearCompleted = () => {
    setData([...activeData]);
  };
  return (
    <StyledFooter style={{ background: `${theme ? "#fff" : "#25273D"}` }}>
      {activeNumber}
      <Link to="/">All</Link>
      <Link to="/active">Active</Link>
      <Link to="/completed">Completed</Link>
      <p onClick={clearCompleted}>Clear</p>
    </StyledFooter>
  );
};
const StyledFooter = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: 90%;
  }

`;
export default Footer;
