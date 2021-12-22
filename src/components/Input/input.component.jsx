import React from 'react';
import "./input.styles.css";

export const Input = ({Placeholder, searchArea}) => 
    <input 
            className='search'
            type='search' 
            placeholder={Placeholder}
            onChange={searchArea}
            />
        