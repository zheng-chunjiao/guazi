import React,{Component,Fragment} from "react"
import "../../../assets/css/details/details.css"
import {Link} from "react-router-dom"
import { Icon } from 'antd'

class Textbox extends Component{
    render(){
        return(
            <Fragment>
               <h2 className="titlebox">日产骐达2016 1.6L CVT智行版
                   <span className="labels">包物流</span>
                   <span className="labels">包过户</span>
               </h2 >
               {/* 日期、行程 */}
               <ul className="assort">
                  <li className="one" style={{borderRight:"1px solid #ccc"}}>
                     <span>2017-11</span>上牌时间
                  </li>
                  <li className="two" style={{borderRight:"1px solid #ccc"}}>
                     <span>1.83万公里</span>表显里程
                  </li>
                  <li className="three" style={{borderRight:"1px solid #ccc"}}>
                     <span>1.6</span>排量
                  </li>
                  <li className="last">
                     <span>自动</span>变速箱
                  </li>
               </ul>
               {/* 价格 */}
               <div className="pricebox">
                   <span className="pricestype">
                       ￥9.01
                       <span className="f14">万</span>
                   </span>
                   <span className="newcarprice">新车指导价13.30万(含税)
                   <Icon type="info-circle" /></span>
                   <a className="ask">询底价</a>
                   <a className="app"> 
                     <span className="btn">
                         更低价格下载app        <Icon type="download" />
                     </span>
                     <span className="box">
                         <img src="//image.guazistatic.com/gz01190923/15/32/8a666805a5ead8519654834eb5e22bba.png"/>
                         <span>下载瓜子二手车APP 瓜分10亿红包</span>
                     </span>
                   </a>
               </div>
               {/* 付一成 */}
                <div className="finance">
                   <span className="icon_pay_one">
                       <img src="//image.guazistatic.com/gz01191015/17/26/05e043b9adc25657ad3b6cb3512647f5.png"/>
                   </span>
                   <a className="loanbox">
                       <span className="f24">0.9</span>万开回家
                       <span className="text-r">分期详情<Icon type="right" /></span>
                   </a>
                   <a className="loan-number">
                      <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
                        在线分期秒批，最高可分期
                        <i className="org-num">50万</i>
                        <span className="text-r">测测分期额度</span>
                   </a>
                </div>
                {/* 服务保障 */}
                <div className="service-protect-vip">
                    <div className="service-protect-title">
                        <i className="text-service">服务保障</i>
                        <a className="look-detail">
                            查看详情
                            <Icon type="right" />
                        </a>
                    </div>
                    <ul className="service-protect-list clearfix">
                      <li>
                         <Icon type="insurance" />
                         <span>2年或4万公里保障</span>
                         
                      </li>
                      <li>
                         <Icon type="insurance" />
                         <span>30天无忧退</span>
                      </li>
                      <li>
                         <Icon type="insurance" />
                         <span>全车整备</span>
                      </li>
                      <li>
                         <Icon type="insurance" />
                         <span>过户服务</span>
                      </li>
                      <li>
                         <Icon type="insurance" />
                         <span>调表车先行赔付</span>
                      </li>
                      <li>
                         <Icon type="insurance" />
                         <span>精选车源</span>
                      </li>
                      <li>
                         <Icon type="insurance" />
                         <span>盗抢查封、销脏车，必退</span>
                      </li>
                      <li>
                         <Icon type="insurance" />
                         <span>259项检测</span>
                      </li>
                    </ul>
                </div>
                {/*  */}
                <div className="btnbox clearfix">
                   <a className="orgbtn">我要预约</a>
                   <a className="greenbtn">我要砍价</a>
                   <a className="freephonebtn">免费咨询</a>
                </div>
            </Fragment>
        )
    }
}
export default Textbox