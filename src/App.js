import React from 'react';
import Header from './components/Header.js';
import Leftnav from './components/Leftnav.js';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      showLeft:false,
      title:'简历'
    }
  }
  setTitle(){
    this.setState({
      title:this.props.router.isActive('/',true)?'简历':'作品'
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
      </div>
    )
  }
}

export default App;
