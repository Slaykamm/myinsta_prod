import React from 'react';
import cl from './MyInput.module.css'

function MyInput({input, ...props}) {
    console.log('propr',props)
    return (
            <input 
                onChange={e => props.setNewChatName(e.target.value)}
                className={cl.Input} 
                {...props}
                {...input}  
            />
    );
}; 

export default MyInput
