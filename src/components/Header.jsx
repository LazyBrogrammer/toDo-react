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
  const [inputValue, setInputValue] = useState("");
  const [place, setPlace] = useState('Create a new toDo...')
  const addToDo = () => {
    localStorage.clear();
    if (inputValue) {
      setData([...data, { text: inputValue, id: uuidv4(), isComplete: false }]);
      setInputValue('')
    } else {
      setPlace('Enter a Text!')
    }
  };
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      addToDo()
    }
  }
  useEffect(() => {
    inputRef.current.focus();
  }, []);


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
      <Input style={{ background: `${theme ? "#fff" : "#25273D"}` }}>
        <div
          className="input__icon"
          style={{ borderColor: `${theme ? "#ae6bef" : "#B564EF"}` }}
          onClick={addToDo}

        ></div>
        <div className="input">
          <input
            type="text"
            style={{
              background: `${theme ? "#fff" : "#25273D"}`,
              color: `${theme ? "#25273D" : "#fff"}`,
            }}
            ref={inputRef}
            placeholder={place}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyUp={handleEnter}
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
    border: 2px solid;
    border-radius: 50%;
    cursor: pointer;
  }
  .input {
    width: 50%;
    input {
      width: 100%;
      height: 50px;
      border: none;
      outline: none;
      font-size: 1.2rem;
      background: #715050;
      &:focus {
        border-bottom: 5px solid #ae6bef;
      }
    }
  }
  .input__clear {
    width: 30px;
    height: 30px;
  }
`;

export default Header;
