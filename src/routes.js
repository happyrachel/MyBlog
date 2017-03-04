import React from 'react';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import App from './App';
import Blog from './components/Blog.js';
import Home from './components/Home.js';
import Work from './components/Work.js';
import About from './components/About.js';

class Routers extends React.Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='blog' component={Blog}/>
          <Route path='Work' component={Work}/>
          <Route path='About' component={About}/>
        </Route>
      </Router>
    )
  }
}


export default Routers
