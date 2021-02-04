
import React,{ Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
// import Names from './Names';
import Gallery from './Gallery';
import Contacts from './Contacts'
import Story from './Story'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Gallery from './Gallery';
// import Contacts from './Contacts';
// import Story from './Story';
// import Empty from './Empty';
// import Try from './Try'

class App extends Component {
 
  render() { 
    return ( 
      <Router>      
        <div className="App">
        <Navbar />    
          <Switch>

            <Route exact path="/"> <Home /></Route>

            <Route exact path="/story"><Story /></Route>

            <Route exact path="/gallery"><Gallery /></Route>

            <Route exact path="/contacts"><Contacts /></Route>


          </Switch>
        <Footer name=" &#169; Content belongs to" greeting="Logensa 2021"/>
        </div>
  </Router>

     );
  }
}
 
export default App;

// class App extends Component {


//   render() { 

//     return ( 

//       <div className="App">
//         <Navbar />    
//         <Names />
//         {/* <Story /> */}
//         <Footer name="Content belongs to" greeting="Logensa 2021"/>
//     </div>
//      );
//   }
// }
 

// export default App;