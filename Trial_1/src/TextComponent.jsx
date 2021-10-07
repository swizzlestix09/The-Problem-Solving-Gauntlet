import React from "react";
import TextBox from "./TextBox.jsx";

const TextComponent = (props) => {
  return props.someText.map((currentTxt, i) => {
    return (
      <>
        <TextBox key="{i.toString()}" text={currentTxt} />
      </>
    );
  });
};

export default TextComponent;
