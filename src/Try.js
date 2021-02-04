import { setState } from 'react';
import React, { Component } from 'react';

class Try extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = { showInfo: false } 
    }

    handleClick = () => {
        this.setState( { showInfo: true } )

    }


    
    render() { 
        return ( 
            <div>
                <a href="#" onClick={ this.handleClick }>Show more</a>
                { this.state.showInfo ?
                    <div> 
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eum. Lo?</p>
                        <h3>Eveniet explicabo</h3> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, fuga. Expedita eius consequatur facere quam similique rem ut quas cumque. Modi, deserunt officia! Nobis porro rerum unde delectus tempora mollitia.</p>
                    </div>   
                    :null } 
            </div>
        );
    }
}
 
export default Try;