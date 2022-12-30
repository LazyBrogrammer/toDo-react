import React from 'react';
import styled from 'styled-components';
const Active = ({ data, setData }) => {
    const activeData = data.filter((item) => item.isComplete === false);
  return (
    <StyledActive>
        {activeData.slice().reverse().map((item) => {
            return (
                <div key={item.id}>
                    <h2>{item.text}</h2>
                </div>
            )
        })}
    </StyledActive>
  );
};

const StyledActive = styled.div`
    
`
export default Active;