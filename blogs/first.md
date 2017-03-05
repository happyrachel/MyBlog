# 这是第一篇文章

代码：

```js
import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  render () {
    return(
      <div className='root'>
        <Header/>
        <div className='mywrap'>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;
```
