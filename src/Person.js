import { React } from 'react';


const Person = (props) => {
    return ( 
        <div>        
            <p>Hello, you can call me {props.name} and you should know that I am from {props.city} and {props.age} </p>
            <p>{ props.children }</p>
        </div>
     );
}
 
export default Person;