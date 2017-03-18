import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import calculator from '../images/calculator.png'
import codester from '../images/codester.png'
import todo from '../images/todo.png'
import eatwhat from '../images/eatwhat.png'
import yunmeili from '../images/yunmeili.png'
import register from '../images/register.png'
import jd from '../images/jd.png'
import phone from '../images/phone.png'
import Egles from '../images/Egles.png'
import slider from '../images/slider.png'

class Blog extends React.Component{
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
      <div style={{width:'100%'}}>
        {this.state.data.length==0 ?
          '数据正在加载':
            this.state.data.map( (item,i) =>
              <div key={i} className='blogcard'>
                <div className='blogindex'>
                  <div className='circle'>
                    {i+1}
                  </div>
                </div>
                <div className='blogdesc'>
                  <h3>{item.title}</h3>
                  <img src={item.imgName}/>
                  {/* <img src={todo} /> */}
                  <a href={`https://github.com/happyrachel/${item.codeAddress}`}>源码地址</a>
                  <a href={`https://happyrachel.github.io/${item.demoAddress}`}>演示demo</a>
                  <figcaption>{item.desc}</figcaption>
                </div>
              </div>
        )}
      </div>
    )
  }
}


export default Blog
