import React, { useState } from 'react';
import Person from './Person';

const Names = props => {
    const [ personsState, setPersonsState ] = useState({ 
      persons: [
        { name: "Anna", age: 28, city:"Riga" },
        { name: "Bob", age: 29, city:"York" },
        { name: "Tilly", age: 26, city:"Colorado" }
      ]     
    });
  
  
  
    const updateNames = () => {
      setPersonsState({
        persons: [ 
          { name: "Anna Boston", age: 28, city:"Riga" },
          { name: "Robert Williams", age: 29, city:"York" },
          { name: "Matilda Hughes", age: 26, city:"Colorado" }
        ]
      })    
    }
    
    console.log(personsState);

    return (
      <div>
        <button onClick={ updateNames }>Update to full names</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} city={personsState.persons[0].city}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} city={personsState.persons[1].city}> I am actually from Boston but had to move to pursue my dreams!</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} city={personsState.persons[2].city}/>
      </div>
    )
  }
 
export default Names;