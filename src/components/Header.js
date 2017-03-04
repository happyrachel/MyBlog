import React from 'react';

class Header extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    return(
      <header>
        <button><i className="fa fa-arrow-left" aria-hidden="true"></i>返回</button>
        <h2>Welcom to MyBlog</h2>
        <button><i className="fa fa-home" aria-hidden="true"></i>首页</button>
      </header>
    )
  }
}


export default Header
