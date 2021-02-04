
import React, { Component } from 'react';
import styles from './styles.module.css'
import { boys } from './Empty.js';
import { girls } from './Empty.js';


class Gallery extends Component {

constructor (props) {
    super (props)
    this.state = {
        likes: 13,
    }
}

addLike() {
    this.setState({
        likes: this.state.likes + 1,
    })
}



    render() {
      return (
          <div className="main-div-gallery">
                  <div className="dog-gallery">
                      
                      {boys.map((line, index) => 
                          
                          (<div className="box-gallery" key={index}> 
                          <img className="img-gallery" src={line.photo} width="95px" height="95px"/><br/>
                          <div className="box-info-inside">
                              <p className="dog-name">{line.name}</p>
                              <p><span className="dog-data boys" >Age: </span>{line.age} months</p>
                              <p><span className="dog-data boys">Gender: </span>{line.gender}</p>
                              <p><span className="dog-data boys">Likes: </span>{line.hobby}</p>
                                {/* <div className="dog-likes">
                                <p className="likes-text">People liked: {this.state.likes} </p>
                                <button className="likes-button" onClick={() => this.addLike()} >Like
                                </button>
                                </div> */}
                          </div>
                          
                      </div>))}
                      
                      
                      {girls.map((line, index) => 
                        
                          (<div className="box-gallery" key={index}>
                          <img className="img-gallery" src={line.photo} width="95px" height="95px"/><br/>
                          <div className="box-info-inside">
                              <p className="dog-name">{line.name}</p>
                              <p><span className="dog-data girls" >Age: </span>{line.age} months</p>
                              <p><span className="dog-data girls">Gender: </span>{line.gender}</p>
                              
                              <p><span className="dog-data girls">Likes: </span>{line.hobby}</p>
                          </div>
                      </div>))}  

                          <div className="dog-likes">
                              <p className="likes-text">People liked: {this.state.likes} </p>
                              <button className="likes-button" onClick={() => this.addLike()} >Like
                              </button>
                          </div>

                          
                  </div>
          </div>
            )
        }

    }
    
export default Gallery






{/* <a href="https://ibb.co/Vpymtx1"><img src="https://i.ibb.co/h15fyc6/2.jpg" alt="2" border="0"></a>
<a href="https://ibb.co/m9vVtJ6"><img src="https://i.ibb.co/K2Np76F/3.jpg" alt="3" border="0"></a>
<a href="https://ibb.co/Gn35pdy"><img src="https://i.ibb.co/7jN1CSP/4.jpg" alt="4" border="0"></a>
<a href="https://ibb.co/wJcgzcv"><img src="https://i.ibb.co/HNh4HhJ/5.jpg" alt="5" border="0"></a>
<a href="https://ibb.co/HVdBPB2"><img src="https://i.ibb.co/bPJQvQ3/6.jpg" alt="6" border="0"></a>
<a href="https://ibb.co/Qp2sTXD"><img src="https://i.ibb.co/k5RYwMm/7.jpg" alt="7" border="0"></a>
<a href="https://ibb.co/DGqk8by"><img src="https://i.ibb.co/YDr8yWM/8.jpg" alt="8" border="0"></a>
<a href="https://ibb.co/VNbV51B"><img src="https://i.ibb.co/Ct4BDc0/9.jpg" alt="9" border="0"></a>
<a href="https://ibb.co/3fvSmWV"><img src="https://i.ibb.co/q0CmY9h/10.jpg" alt="10" border="0"></a>
<a href="https://ibb.co/gWgtgBN"><img src="https://i.ibb.co/KsyVy3d/11.jpg" alt="11" border="0"></a>
<a href="https://ibb.co/HTyQtBZ"><img src="https://i.ibb.co/GQDjWnm/12.jpg" alt="12" border="0"></a>
<a href="https://ibb.co/R49gFqV"><img src="https://i.ibb.co/k6xG7tW/13.jpg" alt="13" border="0"></a>
<a href="https://ibb.co/D7LXY6x"><img src="https://i.ibb.co/vJD5hr7/14.jpg" alt="14" border="0"></a>
<a href="https://ibb.co/C69p3bQ"><img src="https://i.ibb.co/zF2WTXZ/DSC-0745.jpg" alt="DSC-0745" border="0"></a> */}
