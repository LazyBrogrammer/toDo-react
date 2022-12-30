import React from 'react';

const Active = ({ data, setData }) => {
    const activeData = data.filter((item) => item.isComplete === false);
  return (
    <div>
        {activeData.slice().reverse().map((item) => {
            return (
                <div key={item.id}>
                    <h2>{item.text}</h2>
                </div>
            )
        })}
    </div>
  );
};
export default Active;