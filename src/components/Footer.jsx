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
      <p>{activeNumber + " items left"}</p>
      <Link className="link" to="/">
        <span
          style={{
            background: `${theme ? "#fff" : "#25273D"}`,
            color: `${theme ? "#25273D" : "#fff"}`,
          }}
        >
          All
        </span>
      </Link>
      <Link className="link" to="/active">
        <span
          style={{
            background: `${theme ? "#fff" : "#25273D"}`,
            color: `${theme ? "#25273D" : "#fff"}`,
          }}
        >
          Active
        </span>
      </Link>
      <Link className="link" to="/completed">
        <span
          style={{
            background: `${theme ? "#fff" : "#25273D"}`,
            color: `${theme ? "#25273D" : "#fff"}`,
            "&:before": `${theme} ? '#25273D' : #fff`,
          }}
        >
          Completed
        </span>
      </Link>
      <p onClick={clearCompleted}>Clear completed</p>
    </StyledFooter>
  );
};
const StyledFooter = styled.div`
  width: 50%;
  min-height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  border-radius: 10px;
  position: sticky;
  bottom: 10px;
  left: 0;
  right: 0;
  padding: 5px;
  margin-top: 70vh;
  /* margin-top: 30px; */
  @media only screen and (max-width: 768px) {
    width: 90%;
  }

  .link {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
    margin-left: 3px;
    margin-right: 3px;
    span {
      /* color: rgb(249, 249, 249); */
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  p {
    cursor: pointer;
    transition: all 0.3s;
    font-size: 12px;
    &:hover {
      color: #701b79;
    }
  }
`;
export default Footer;
