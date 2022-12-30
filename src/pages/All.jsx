import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
const All = ({ data, setData, theme }) => {
  const [boolean, setBoolean] = useState(true);
  const handleActive = (index) => {
    setBoolean(!boolean);
    data.slice().reverse()[index].isComplete = boolean;
    setData([...data]);
  };
  const CompletedItem = ({}) => {
    return <StyledCompleted></StyledCompleted>;
  };
  const ActiveItem = () => {
    return <StyledActiveItem></StyledActiveItem>;
  };
  const StyledActiveItem = styled.div`
    background-color: green;
  `;
  return (
    <StyledAll
      style={{
        background: `${theme} ? '#fff' : '#171823'`,
        color: `${theme ? "#25273D" : "#fff"}`,
      }}
    >
      {data
        .slice()
        .reverse()
        .map((item, index) => {
          return (
            <div
              style={{
                borderColor: `${theme ? "#e3e4f1" : "#393A4B"}`,
                textDecoration: `${
                  item.isComplete === true ? "line-through" : ""
                }`,
              }}
              onClick={() => handleActive(index)}
              key={item.id}
              className="all"
            >
              <FontAwesomeIcon
                icon={item.isComplete ? faCircleCheck : faCircleNotch}
                style={{ color: "#B567EF" }}
                className="font"
              />
              <div>{item.text}</div>
            </div>
          );
        })}
    </StyledAll>
  );
};

const StyledAll = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 10px;
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
  .all {
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1rem;
    border-bottom: 1px solid;
    padding: 15px;
    overflow: hidden;
    .font {
      margin-right: 10px;
    }
  }
`;

export default All;
