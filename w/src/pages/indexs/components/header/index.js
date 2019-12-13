import React,{Component} from 'react'
import { Icon } from 'antd'
import Nav from '../../../../public/components/nav'
import '../../../../assets/css/indexs/header.css'
export default class Header extends Component{
    render(){
        return (
            <div id='header'>
                <div className='header-con'>
                    <Nav/>
                    <div className="search">
                        <div className="index-title"></div>
                        <div className="search-box ">
                            <input type="text" className="search-input" 
                                placeholder="请输入关键词，例如：君越  2.4L" name="keyword" autoComplete="off" />
                            <button className="search-btn" type="button">搜索</button>
                            <div className="autocomplete-dropdown" >
                                <ul>
                                    <li className="item"><span className="hot-tip">热门推荐</span></li>
                                    <li className="item">大众</li>
                                    <li className="item">福特</li>
                                    <li className="item">别克</li>
                                    <li className="item">SUV</li>
                                    <li className="item">现代</li>
                                    <li className="item">雪佛兰</li>
                                    <li className="item">丰田</li>
                                    <li className="item">日产</li>
                                    <li className="item">起亚</li>
                                </ul>
                            </div>
                            <div className='leijiayin'></div>
                        </div>
                
                    </div>
                    <div className='index-entry-buysell'>
                        <div className='entry-buycar'>
                            <div className='entry-title'>
                                <a className='a3' href='#'><i className='ii'>我要买车</i><Icon type="caret-right" /></a>
                            </div>
                            <div className='buycar-brand'>
                                <a className='a1' href='#'>
                                    <img className='imgs' src='//sta.guazistatic.com/static/c2c/web/che-logo/dazhong.png'/>大众
                                </a>
                                <a className='a1' href='#'>
                                    <img className='imgs' src='//sta.guazistatic.com/static/c2c/web/che-logo/honda.png'/>本田
                                </a>
                                <a className='a1' href='#'>
                                    <img className='imgs' src='//sta.guazistatic.com/static/c2c/web/che-logo/toyota.png'/>丰田
                                </a>
                                <a className='a1' href='#'>
                                    <img className='imgs' src='//sta.guazistatic.com/static/c2c/web/che-logo/benz.png'/>奔驰
                                </a>
                                <a className='a1' href='#'>
                                    <img className='imgs' src='//sta.guazistatic.com/static/c2c/web/che-logo/richan.png'/>日产
                                </a>
                                <a className='a1' href='#'>
                                    <img className='imgs' src='//sta.guazistatic.com/static/c2c/web/che-logo/buick.png'/>别克
                                </a>
                                <a className='a1' href='#'>
                                    <img className='imgs' src='//sta.guazistatic.com/static/c2c/web/che-logo/ford.png'/>福特
                                </a>
                            </div>
                           <div className='buycar-brand'>
                                <a className='a1' href='#'>
                                    <img className='imgs' src='//sta.guazistatic.com/static/c2c/web/che-logo/audi.png'/>奥迪
                                </a>
                                <a className='a1' href='#'>
                                    <img className='imgs' src='//sta.guazistatic.com/static/c2c/web/che-logo/bmw.png'/>宝马
                                </a>
                                <a className='a1' href='#'>
                                    <img className='imgs' src='//sta.guazistatic.com/static/c2c/web/che-logo/hyundai.png'/>现代
                                </a>
                                <a className='a1' href='#'>
                                    <img className='imgs' src='//sta.guazistatic.com/static/c2c/web/che-logo/kia.png'/>起亚
                                </a>
                                <a className='a1' href='#'>
                                    <img className='imgs' src='//sta.guazistatic.com/static/c2c/web/che-logo/hafu.png'/>哈佛
                                </a>
                                <a className='a1' href='#'>
                                    <img className='imgs' src='//sta.guazistatic.com/static/c2c/web/che-logo/mazda.png'/>马自达
                                </a>
                                <a className='a1' href='#'>全部品牌</a>
                            </div>
                            <div className='buycar-price'>
                                <a className='a2' href='#'>3万以下</a>
                                <a className='a2' href='#'>3-5万</a>
                                <a className='a2' href='#'>5-7万</a>
                                <a className='a2' href='#'>7-9万</a>
                                <a className='a2' href='#'>9-12万</a>
                                <a className='a2' href='#'>12-16万</a>
                                <a className='a2' href='#'>16-20万</a>
                            </div>
                            <div className='buycar-price'>
                                <a className='a2' href='#'>超值</a>
                                <a className='a2' href='#'>急售</a>
                                <a className='a2' href='#'>练手车</a>
                                <a className='a2' href='#'>准新车</a>
                                <a className='a2' href='#'>严选车</a>
                                <a className='a2' href='#'>SUV</a>
                                <a className='a2' href='#'>查看更多</a>
                            </div>
                        </div>
                        <div className='entry-sellcar'>
                            <div className='entry-title'>
                                <a className='a3' href='#'><i className='ii'>我要卖车</i><Icon type="caret-right" /></a>
                                <div className='sellcar-show'>瓜子保卖，当天拿钱，全程服务</div>
                            </div>
                            <div className='sellcar-box'>
                                <div className='phone'>
                                    <input className="phone-input"  placeholder="请输入您的手机号" />
                                    <div className='btn'>预约卖车</div>
                                </div>
                                <div className='val'>
                                    <a href='#'>爱车估价</a>|
                                    <a href='#'>保卖服务</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        let oInput=document.querySelector('.search-input')
        let oDiv=document.querySelector('.autocomplete-dropdown')
        oInput.onfocus=function show(){
            oDiv.style.display='block';
        }
        oInput.onblur=function hid(){
            oDiv.style.display='none';
        }
    }
}