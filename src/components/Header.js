import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component{
  render(){
    return(
      <header>
        <div className='picture'></div>
        <h3>我的{this.props.title}</h3>
        <div className="container">
        	<ul className="menu">
        		<li><a href="#">目录</a>
        			<ul className="submenu">
        				<li><a href="#">我的简历</a></li>
                <li>
                  <Link to='blog'>
                    我的作品
                  </Link>
                </li>
        			</ul>
        		</li>
        	</ul>
        </div>
      </header>
    )
  }
}


export default Header
