import React,{ Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Gallery from './Gallery';
import Contacts from './Contacts'
import Story from './Story'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
 
  render() { 
    return ( 
      <Router>      
        <div className="App">
        <Navbar />    
          <Switch>

            <Route exact path="/" component={Home} />

            <Route exact path="/story" component={Story} />

            <Route exact path="/gallery" component={Gallery} />

            <Route exact path="/contacts" component={Contacts} /> 


          </Switch>
        <Footer name=" &#169; Content belongs to" greeting="Logensa 2021"/>
        </div>
  </Router>

     );
  }
}
 
export default App;
