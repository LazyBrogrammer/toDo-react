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
    <StyledFooter
      style={{
        background: `${theme ? "#fff" : "#25273D"}`,
        color: `${theme ? "#25273D" : "#fff"}`,
        boxShadow: `${theme} ? "0px 0px 5px #87a1f4" : ""`,
      }}
    >
      {activeNumber + " items left"}
      <Link className="link" to="/">
        All
      </Link>
      <Link className="link" to="/active">
        Active
      </Link>
      <Link className="link" to="/completed">
        Completed
      </Link>
      <p onClick={clearCompleted}>Clear completed</p>
    </StyledFooter>
  );
};
const StyledFooter = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  position: sticky;
  margin: 0 auto;
  bottom: 10px;
  border-radius: 10px;
  margin-top: 20px;
  @media only screen and (max-width: 768px) {
    width: 90%;
  }

  .link {
    cursor: pointer;
    text-decoration: none;
    margin-left: 3px;
    margin-right: 3px;
  }
  p {
    cursor: pointer;
  }
`;
export default Footer;
