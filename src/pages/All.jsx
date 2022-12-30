import React from "react";
import styled from "styled-components";
const All = ({ data, setData }) => {
  const handleActive = (index) => {
    data.slice().reverse()[index].isComplete = true;
    setData([...data]);
  };
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
export default All;
