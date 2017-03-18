import React from 'react';

class Home extends React.Component{
  render(){
    return(
      <div className='home'>
        <div className='home-cover'>
          <ul>
            <li>
              <dl className='personal'>
                <dt><i className="fa fa-heartbeat" aria-hidden="true"></i>基本信息</dt>
                <dd><span>个人信息:</span>李颖伟/24岁/女</dd>
                <dd><span>毕业院校：</span>河北工程大学</dd>
                <dd><span>学历：</span>本科</dd>
                <dd><span>专业：</span>信息管理与信息系统</dd>
                <dd><span>应聘岗位：</span>web前端工程师</dd>
                <dd><span>现居住地：</span>河北秦皇岛</dd>
              </dl>
            </li>
            <li>
              <dl className='personal'>
                <dt>联系方式</dt>
                <dd><i className="fa fa-phone" aria-hidden="true"></i><span>联系电话：</span>15703379680</dd>
                <dd><i className="fa fa-qq" aria-hidden="true"></i><span>QQ：</span>825255583@qq.com</dd>
                <dd><i className="fa fa-weixin" aria-hidden="true"></i><span>微信：</span>lyw825255583</dd>
                <dd><i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>邮箱：</span>825255583@qq.com</dd>
                <dd><i className="fa fa-github" aria-hidden="true"></i><span>github：</span>
                  <a href='https://github.com/happyrachel'>
                    https://github.com/happyrachel
                  </a>
                </dd>
                <dd><i className="fa fa-bookmark" aria-hidden="true"></i><span>Markdown笔记：</span>
                  <a href='https://happyrachel.github.io'>
                    https://happyrachel.github.io
                  </a>
                </dd>
              </dl>
            </li>
            <li>
              <dl className='personal'>
                <dt>主要技能</dt>
                <dd>
                  <button type="button" className="btn btn-primary">HTML</button>
                  <button type="button" className="btn btn-primary">CSS</button>
                  <button type="button" className="btn btn-primary">JS</button>
                  <button type="button" className="btn btn-primary">jquery</button>
                  <button type="button" className="btn btn-primary">Bootstrap</button>
                  <button type="button" className="btn btn-primary">git</button>
                  <button type="button" className="btn btn-primary">React</button>
                  <button type="button" className="btn btn-primary">HTTP</button>
                  <button type="button" className="btn btn-primary">ES6</button>
                  <button type="button" className="btn btn-primary">Ajax</button>
                </dd>
              </dl>
            </li>
            <li>
              <dl className='personal'>
                <dt>自我评价</dt>
                <dd>
                  <p>本人自2015年毕业开始进入秦皇岛商之翼网络科技有限公司进行实习，开始以解决客户bug为主，后期整理修改免费模板，并对官网进行一定的管理和更新，后因销售部缺人便调到销售部门，但是自己还是喜欢计算机代码编程，故辞职，报了一个培训班，跟随业界大咖peter学习了如今最热的React框架，发现自己对于做出来的东西感到特别开心，希望能找到一个平台，延续自己的快乐</p>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}


export default Home
