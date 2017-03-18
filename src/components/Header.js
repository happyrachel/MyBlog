import React from 'react';
import {Link} from 'react-router';
import Footer from './Footer.js'

class Header extends React.Component{
  constructor(){
    super();
    this.state={
      active:false
    }
  }
  handleClick(){
    if(this.state.active){
      this.setState({active:false})
    }else{
      this.setState({active:true})
    }
  }
  render(){
    return(
      <div>
        <header>
          <div className='picture'></div>
          <h3>我的{this.props.title}</h3>
          <div className="container">
            <a href="#" onClick={this.handleClick.bind(this)}><i className="fa fa-align-justify" aria-hidden="true"></i></a>
          </div>
        </header>
        {this.state.active?
          <Footer />:
          <div></div>
        }
    </div>
    )
  }
}


export default Header
