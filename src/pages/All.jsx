import React from "react";
import styled from "styled-components";

const All = ({ data, setData, theme }) => {
  const handleActive = (index) => {
    data.slice().reverse()[index].isComplete = true;
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
    <StyledAll style={{ background: `${theme} ? '#fff' : '#171823'` }}>
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

const StyledAll = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;
// const StyledCompleted = styled.div`
//   background-color: yellow;
// `;
export default All;
