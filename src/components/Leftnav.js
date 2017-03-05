import React from 'react';
import {Link} from 'react-router'

class Leftnav extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    return(
      <div className='leftnav'>
        <h2>我的{this.props.title}</h2>
        <Link to='/' activeStyle={{backgroundColor:'#4c5f72'}} onlyActiveOnIndex={true}><i className="fa fa-home" aria-hidden="true"></i>HOME</Link>
        <Link to='blog' activeStyle={{backgroundColor:'#4c5f72'}}><i className="fa fa-bookmark" aria-hidden="true"></i>BLOG</Link>
        <Link to='work' activeStyle={{backgroundColor:'#4c5f72'}}><i className="fa fa-graduation-cap" aria-hidden="true"></i>WORK</Link>
        <Link to='about' activeStyle={{backgroundColor:'#4c5f72'}}><i className="fa fa-user" aria-hidden="true"></i>About</Link>
      </div>
    )
  }
}


export default Leftnav
