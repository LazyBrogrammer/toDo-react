import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const Completed = ({ data, setData, theme }) => {
  const completedData = data.filter((item) => item.isComplete === true);
  return (
    <StyledCompleted>
      {completedData
        .slice()
        .reverse()
        .map((item) => {
          return (
            <div
              key={item.id}
              style={{
                borderColor: `${theme ? "#e3e4f1" : "#393A4B"}`,
                color: `${theme ? "#25273D" : "#fff"}`,
                textDecoration: 'line-through'
              }}
              className='completed'
            >
              <FontAwesomeIcon
                style={{ color: "#b567ef" }}
                icon={faCircleCheck}
                className='font'
              />
              <div>{item.text}</div>
            </div>
          );
        })}
    </StyledCompleted>
  );
};
const StyledCompleted = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  .completed {
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
    padding: 15px;
    overflow: hidden;
    font-size: 1rem;
    .font {
      margin-right: 10px;
    }
  }
`;
export default Completed;
