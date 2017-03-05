import React from 'react';

class Post extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    return(
      <div>
        {this.props.params.title}
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
