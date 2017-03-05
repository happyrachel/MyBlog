import React from 'react';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import App from './App';
import Blog from './components/Blog.js';
import Home from './components/Home.js';
import Work from './components/Work.js';
import About from './components/About.js';
import Post from './components/Post.js';

class Routers extends React.Component{
  render(){
    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='blog' component={Blog}/>
          <Route path='Work' component={Work}/>
          <Route path='About' component={About}/>
          <Route path='post/:title' component={Post}/>
        </Route>
      </Router>
    )
  }
}


export default Routers
