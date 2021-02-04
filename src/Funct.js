import React, { Component } from 'react';
import Func from './Funct';


const design = {
    backgroundColor: '#ccc',
    color: 'white',
    border: '1px solid yellow'
}



const text = () => {

    
    return (  
        <div>
            <h1>Hello</h1>
            <button style={design}>Click</button>
        </div>
    );
}
 
export default Func;