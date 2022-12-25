import React from "react";
import Header from "./Header";
const Main = ({ theme, setTheme, data, setData }) => {
  return (
    <div>
      <Header
        theme={theme}
        setTheme={setTheme}
        data={data}
        setData={setData}
      />
      
    </div>
  );
};

export default Main;
