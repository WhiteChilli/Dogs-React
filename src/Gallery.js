import React, { Component } from 'react';
import { allDogs } from './Empty.js';


class Gallery extends Component {

  constructor (props) {
      super (props)
      this.state = {
        disabled: false,
        likes: (allDogs.map(x => x.likes)),
        dogs: allDogs
      }
}
    
  addLike(index) {
  
  const dogsLike = this.state.dogs.map((item, id) => {
    if (index === id) {
      return {...item, likes: item.likes + 1, disabled: true}
    }  
    return item    
  })
  this.setState({ dogs: dogsLike });
}

    render() {
      return (
              <div className="main-div-gallery">

                <div className="box-gallery">
                  {this.state.dogs.map((line, index) => (  
                    <div className="box-content" key={index}>
                      <div className="dog-info">
                        <div className="d-info">                        
                          <h3 className="dog-name">{line.name}</h3>
                          <p><span>Gender: </span> {line.gender} </p>
                          <p><span>Age:</span> {line.age} months</p>
                          <p><span>Enjoys: </span> {line.hobby} </p>
                        </div>
                      </div>

                      <div className="img-likes">
                        <img src={line.photo} className="img-gallery"  width="95px" height="95px"/>
                        <p className="p-liked">People liked so far: {line.likes} </p>
                        <button className="likes" disabled={line.disabled} onClick={() => this.addLike(index)}><img className="heart-like" src="https://i.ibb.co/PjXnN8G/heart-1.png"   border="0" width="10px"/>Like</button>
                      </div>

                    </div>))}
                    
                  </div>  

              </div>  
      )}}

export default Gallery;
