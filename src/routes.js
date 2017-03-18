import React from 'react';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import App from './App';
import Project from './components/Project.js';
import Home from './components/Home.js';

class Routers extends React.Component{
  render(){
    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='project' component={Project}/>
        </Route>
      </Router>
    )
  }
}


export default Routers
