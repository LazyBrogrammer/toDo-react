import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

// import images
import bgDark from "../images/bg-desktop-dark.jpg";
import bgLight from "../images/bg-desktop-light.jpg";
import iconDark from "../images/icon-moon.svg";
import iconLight from "../images/icon-sun.svg";

const Header = ({ theme, setTheme, data, setData }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <StyledHeader
      style={{
        backgroundImage: `url(${theme ? bgLight : bgDark})`,
        backgroundSize: "cover",
      }}
    >
      <div className="header__head">
        <div className="text__logo">
          <h1>todo</h1>
        </div>
        <div className="theme-changer" onClick={() => setTheme(!theme)}>
          <img
            src={theme ? iconLight : iconDark}
            alt="moon and sun icon for theme icon changer"
          />
        </div>
      </div>
      <Input style={{ background: `${theme ? "#fff" : "#000"}` }}>
        <div
          className="input__icon"
          style={{ borderColor: `${theme ? "#000" : "#c3c3c3"}` }}
        ></div>
        <div className="input">
          <input
            type="text"
            style={{
              background: `${theme ? "#fff" : "#000"}`,
              color: `${theme ? '#000': '#fff'}`,
            }}
            ref={inputRef}
            placeholder='Create a new to do...'
          />
        </div>
        <div className="input__clear"></div>
      </Input>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  height: 30vh;
  .header__head {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    margin: 0 auto;
    margin-bottom: 40px;
    .text__logo {
      margin-right: 1rem;
      h1 {
        width: 100%;
        text-transform: uppercase;
        color: #fff;
        font-weight: 700;
        font-size: 2rem;
        line-height: 40px;
        letter-spacing: 15px;
        text-align: center;
      }
    }
    .theme-changer {
      margin-left: 2rem;
      min-width: 2rem;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }
`;

const Input = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  .input__icon {
    width: 20px;
    height: 20px;
    border: 1px solid;
    border-radius: 50%;
    cursor: pointer;
  }
  .input {
    width: 50%;
    input {
      width: 100%;
      height: 40px;
      border: none;
      outline: none;
      font-size: 1.2rem;
      background: #715050;
      &:active {
        /* border: 1px solid; */
      }
      &:hover {
        /* border: 1px solid; */
      }
      &:focus {
        /* border: 1px solid; */
      }
    }
  }
  .input__clear {
    width: 30px;
    height: 30px;
  }
`;
export default Header;
