import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component{
  render(){
    return(
      <footer>
        <Link to='/'>
          我的简历
        </Link>
        <Link to='project'>
          我的作品
        </Link>
      </footer>
    )
  }
}


export default Footer
