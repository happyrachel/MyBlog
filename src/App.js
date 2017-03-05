import React from 'react';
import Header from './components/Header.js';
import Leftnav from './components/Leftnav.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      showLeft:false,
      title:'主页'
    }
  }
  setTitle(){
    this.setState({
      title:this.props.router.isActive('/',true)?'主页':
        this.props.router.isActive('/blog')?'博客':
        this.props.router.isActive('/work')?'工作':
        this.props.router.isActive('/about')?'关于':'文章'
    })
  }
  componentWillReceiveProps(){
    this.setTitle();
  }
  componentWillMount(){
    this.setLeft();
    window.onresize = this.setLeft.bind(this);
    this.setTitle();
  }
  setLeft(){
    this.setState({showLeft:window.innerWidth>750?true:false})
  }
  render () {
    return(
      <div className='root'>
        {this.state.showLeft? <Leftnav title={this.state.title}/>:<Header title={this.state.title}/>}
        <div className='mywrap'>
          {this.props.children}
        </div>
        {this.state.showLeft? null:<Footer/>}
      </div>
    )
  }
}

export default App;
