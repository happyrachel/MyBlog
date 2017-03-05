import React from 'react';
import {Link} from 'react-router';

import axios from 'axios';

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
                  <p>{item.desc}</p>
                  <Link to={`post/${item.url}`}>阅读更多</Link>
                  <span>{item.date}</span>
                </div>
              </div>
        )}
      </div>
    )
  }
}


export default Blog
