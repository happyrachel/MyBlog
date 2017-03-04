import React from 'react';

import {Link} from 'react-router'
class Footer extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    return(
      <footer>
        <Link to='/' activeStyle={{color:'#1c2450'}} onlyActiveOnIndex={true}><i className="fa fa-home" aria-hidden="true"></i><br />HOME</Link>
        <Link to='blog' activeStyle={{color:'#1c2450'}}><i className="fa fa-bookmark" aria-hidden="true"></i><br />BLOG</Link>
        <Link to='work' activeStyle={{color:'#1c2450'}}><i className="fa fa-graduation-cap" aria-hidden="true"></i><br />WORK</Link>
        <Link to='about' activeStyle={{color:'#1c2450'}}><i className="fa fa-user" aria-hidden="true"></i><br />About</Link>
      </footer>
    )
  }
}


export default Footer
