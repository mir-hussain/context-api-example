import React from "react";
import FirstComponentChild from "../FirstComponentChild/FirstComponentChild";

const FirstComponent = () => {
  return (
    <div className='first-component'>
      <h1>First Component</h1>
      <FirstComponentChild />
    </div>
  );
};

export default FirstComponent;
