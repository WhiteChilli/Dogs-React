import { setState } from 'react';
import React, { Component } from 'react';
import { boys, girls, allDogs } from './Empty.js';



class Home extends Component {
    state = {
        boysOn: null,
        color: ''
    }
    showBoys = () => {
        this.setState({
            boysOn: true,
            color: '#0093A7' 
        })
    }
    showGirls = () => {
        this.setState({
            boysOn: false,
            color: '#f1356d'
        })
      } 
    
    showDogs = () => {
      this.setState({
          boysOn: null,
          color: ''
      })
    }  
    render() {
      
    let dogCount = allDogs.length;

        if (this.state.boysOn == false) {
            dogCount = girls.length;
                        
        } else if (this.state.boysOn == true) {
            dogCount = boys.length; }
            
    return (
      <div className="test">
        <div className="home-body">
            <div className="home-container">     
              <div className="top-info">
                <div className="home-content">
                  <h1 className="logo">Lorem ipsum dolor sit amet?</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis quod explicabohic, pariatur rem eaque.</p>
                  <img src="https://i.ibb.co/1v6K75F/dogie.png" width="100px" height="100px"/>
                </div>
              </div>

              <div className="availability">

                  <h2 className="logo">Dog availability</h2>
                  <p>We currently have <span id="dogcount" style={{color:this.state.color}}>{dogCount}</span> available in our shelter</p>
                  <button className="btn-count-dogs" onClick={this.showBoys}>Boys</button>
                  <button className="btn-count-dogs" onClick={this.showGirls}>Girls</button>
                  <button className="btn-count-dogs" onClick={this.showDogs}>All Dogs</button>
                  
              </div>
            </div>
        </div>
      </div>
     );
}
}

export default Home;










































// class Home extends Component {
//     state = {
//         changeText: null,
//         color: ''
//     }
//     showBoys = () => {
//         this.setState({
//             changeText: 'boys',
//             color: 'blue' })
//     }

//     showGirls = () => {
//         this.setState({
//             changeText: 'girls',
//             color: '#f1356d'
//         })
//     }
        

//     render() {


    
//     const boys = ['axel','chernishevky','alen','toto','timka','bublik','pushkin','stepan'];
//     const girls = ['aida','jemmy','laika','ziza','kisa','rory'];
    
//     let dogCount = 0;

//         if (this.state.changeText === 'boys') {
//             dogCount = girls.length;
            
            
//         } else if (this.state.changeText === 'girls') {
//             dogCount = boys.length; 
            
//         }

//     return (
//         <div>
        
//             <div className="content">
//                 <h1 className="logo">Lorem ipsum dolor sit amet?</h1>
//                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis quod explicabo hic, pariatur rem eaque.</p>
//             </div>



//             <div className="home">
//                 <h2 className="logo">Availability</h2>
//                 <p>We currently have {dogCount} available in our shelter</p>
//                 <button onClick={this.showBoys} style={{color:this.state.color}}>Boys</button>
//                 <button onClick={this.showGirls} style={{color:this.state.color}}>Girls</button>
//             </div>

//         </div>
//      );
// }
// }

// export default Home;