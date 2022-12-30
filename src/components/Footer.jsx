import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Footer = ({ data, setData }) => {
  let activeNumber = 0;
  for(let i = 0; i < data.length; i++) {
    if (data[i].isComplete === false) {
      activeNumber += 1;
    }
  }
  const activeData = data.filter((item) => item.isComplete === false);
  const clearCompleted = () => {
    setData([...activeData])
  }
  return (
    <StyledFooter>
     {
      activeNumber 
     }
     <button onClick={clearCompleted}>Clear</button>
    <Link to='/'>
      All
    </Link>
    <Link to='/active'>
      Active
    </Link>
    <Link to='/completed'>
      Completed
    </Link>
    </StyledFooter>
  );
};
const StyledFooter = styled.div`
display: flex;
`;
export default Footer;
