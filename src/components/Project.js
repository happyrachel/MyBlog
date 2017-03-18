import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import {ProgressBar} from 'react-bootstrap'
class Project extends React.Component{
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/happyrachel/MyBlog/master/blogs/blogs.json')
    .then( res => this.setState({data:res.data}))
  }
  render(){
    return(
      <div className='blog'>
        {this.state.data.length==0 ?
           <ProgressBar active now={45} />
          :
            this.state.data.map( (item,i) =>
              <div key={i} className='blogcard'>
                <div className='blogindex'>
                  <div className='circle'>
                    {i+1}
                  </div>
                </div>
                <div className='blogdesc'>
                  <h4>{item.title}</h4>
                  <div className='product-img' style={{backgroundImage:`url(https://raw.githubusercontent.com/happyrachel/MyBlog/master/src/images/${item.imgName}.png)`}}>
                  </div>
                  <div className='lianjie'>
                    <a href={`https://github.com/happyrachel/${item.codeAddress}`}>源码地址</a>
                    <a href={`https://happyrachel.github.io/${item.demoAddress}`}>演示demo</a>
                  </div>
                  <figcaption>{item.desc}</figcaption>
                </div>
              </div>
        )}
      </div>
    )
  }
}


export default Project
