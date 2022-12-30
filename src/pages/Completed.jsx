import React from "react";

const Completed = ({data, setData}) => {
  const completedData = data.filter((item) => item.isComplete === true)
  return (
    <div>
     {
      completedData.slice().reverse().map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.text}</h2>
          </div>
        )
      })
     }
    </div>
  );
};

export default Completed;