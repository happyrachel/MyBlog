import React from 'react';
import axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';


marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});

class Post extends React.Component{
  constructor(){
    super();
    this.state={
      data:''
    }
  }
  componentDidMount(){
    axios.get(`https://raw.githubusercontent.com/happyrachel/MyBlog/master/blogs/${this.props.params.title}.md`)
    .then( res => this.setState({data:res.data}))
  }
  render(){
    return(
      <div style={{width:'100%'}}>
        {this.state.data.length==0?'正在加载':
          <div dangerouslySetInnerHTML={{__html:marked(this.state.data)}} className='post-content'></div>
        }
      </div>
    )
  }
}


export default Post


// let Post = function (params){
//   console.log(params)
//   return(
//     <div>{params}</div>
//   )
// }
//
// export default Post
