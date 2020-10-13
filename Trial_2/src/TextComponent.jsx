import React from 'react';
import TextBox from './TextBox.jsx';

const TextComponent = (props) => {

    return (
        props.users.map((currentUser, i) => {

                <TextBox 
                    key={i}
                    text={currentUser} 
                    />  
        })
    )
};

export default TextComponent;