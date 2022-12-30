import React from "react";
import styled from "styled-components";


const All = ({ data, setData }) => {
  const handleActive = (index) => {
    data.slice().reverse()[index].isComplete = true;
    setData([...data]);
  };
  const CompletedItem = ({ text }) => {
    return (
      <StyledCompleted>
        <h1>completed item</h1>
      </StyledCompleted>
    );
  };
  const ActiveItem = () => {
    return (
      <StyledActiveItem>
        <h1>completed item</h1>
      </StyledActiveItem>
    );
  };
  const StyledActiveItem = styled.div`
    background-color: green;
  `;
  return (
    <StyledAll>
      {data
        .slice()
        .reverse()
        .map((item, index) => {
          return (
            <div onClick={() => handleActive(index)} key={item.id}>
              <h2>{item.text}</h2>
            </div>
          );
        })}
    </StyledAll>
  );
};

const StyledAll = styled.div``;
const StyledCompleted = styled.div`
  background-color: yellow;
`;
export default All;
