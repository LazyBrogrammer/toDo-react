import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
const Active = ({ data, setData }) => {
    const activeData = data.filter((item) => item.isComplete === false);
  return (
    <StyledActive>
        {activeData.slice().reverse().map((item) => {
            return (
                <div key={item.id}>
                    <FontAwesomeIcon icon={faCircleNotch} />
                    <p>{item.text}</p>
                </div>
            )
        })}
    </StyledActive>
  );
};

const StyledActive = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export default Active;