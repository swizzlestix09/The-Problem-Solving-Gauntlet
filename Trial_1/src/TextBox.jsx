import React from 'react';
const TextBox = (props) => {

    return (
        <div className="textBoxOutterDiv">
            <h1 className="textBoxHeader">This should return the string at the corresponding index</h1>
            <h1 className="textBoxText">{props.text}</h1>
        </div>
    )
}

export default TextBox;
