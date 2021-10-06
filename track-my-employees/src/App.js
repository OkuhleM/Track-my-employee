import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import {BrowserRouter as Router,  Switch, Route,} from "react-router-dom";
// import Landing from './Components/Landing';
  

 



class App extends React.Component {
 

  
  render(){
    return(
      <Router>
        
      <div className="container">
      <Switch>
        {/* <Route exact>
          <Landing />
          </Route> */}
        <Route exact path='/' >
        <Navbar />
        </Route>
        <Route path="/form">
        <Form />
        </Route>
        </Switch>
        </div>
        </Router>
    )
  }
}

export default App;
