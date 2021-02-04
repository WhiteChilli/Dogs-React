import { setState } from 'react';
import React, { Component } from 'react';


class Story extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = { showInfo: true } 
    }

    handleClick = () => {
        this.setState((state) => ({
            showInfo: !state.showInfo, }));
        

    }
    

    render() {

        console.log(this)
            return ( 
                <div className="about-us-container">
                    <div className="main-about">
                        <div className="img-box-about">
                            <img className="story-img" src="https://i.ibb.co/1v6K75F/dogie.png" width="170px" height="170px"/>
                        </div>
                            
                        <div className="txt-box-about">
                            <h1>Who we are</h1>

                            <p>Lorem ipsum dolor, 5 sit amet consectetur adipisicing elit. Eveniet explicabo ipsam porro natus, iste veniam aspernatur nesciunt animi consequatur 2017 cum eius repellendus, autem dolorem dolor aliquam sequi quasi. Ipsa, ratione.<br /><br />
                            
                            Hic eius numquam sunt nobis repellendus modi odit eos, voluptates, nisi impedit perferendis tempore iste vitae facere magnam. Animi nulla quasi, officiis quod laborum eveniet ex itaque.
                                <a href="#" onClick={this.handleClick}>{this.state.showInfo ? 'Show more' : 'Show less'}
                                </a>
                            </p>
                                

                        { !this.state.showInfo &&
                            <div> 
                                <br />
                                <p>Lorem ipsum dolor 2018 sit amet consectetur adipisicing elit. Esse, eum. Lo?!</p>
                                <h3>Eveniet explicabo</h3> 
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, fuga. Expedita eius consequatur facere quam similique rem ut quas cumque. Modi, deserunt officia! Nobis porro rerum unde delectus tempora mollitia 2021.        
                                </p>
                            </div>   
                         }    
                            </div>
                        </div>
                    </div>  
            )
        }

    }

       
export default Story;

{/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/1v6K75F/dogie.png" alt="dogie" border="0"></a> */}