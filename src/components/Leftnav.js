import React from 'react';
import {Link} from 'react-router'

class Leftnav extends React.Component{
  render(){
    return(
      <div className='leftnav'>
        <div className='myphoto'></div>
        <h2>李颖伟的{this.props.title}</h2>
        <Link to='/' activeStyle={{backgroundColor:'#4c5f72'}} onlyActiveOnIndex={true}>
          <i className="fa fa-home" aria-hidden="true"></i>
          我的简历
        </Link>
        <Link to='blog' activeStyle={{backgroundColor:'#4c5f72'}}>
          <i className="fa fa-bookmark" aria-hidden="true"></i>
          我的作品
        </Link>
      </div>
    )
  }
}


export default Leftnav
