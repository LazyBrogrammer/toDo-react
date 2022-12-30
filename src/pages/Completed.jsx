import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
const Completed = ({data, setData}) => {
  const completedData = data.filter((item) => item.isComplete === true)
  return (
    <StyledCompleted>
     {
      completedData.slice().reverse().map((item) => {
        return (
          <div key={item.id}>
            <FontAwesomeIcon style={{color: '#b567ef'}} icon={faCircleCheck} />
            <h2>{item.text}</h2>
          </div>
        );
      })
     }
    </StyledCompleted>
  );
};
const StyledCompleted = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    cursor: pointer;
    text-decoration: line-through;
    .font-awseome {
      color: #b567ef;
    }
  }
`;
export default Completed;