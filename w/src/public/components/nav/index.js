import React,{Component} from 'react'
import { Icon } from 'antd'
import '../../../assets/css/indexs/nav.css'
export default class Nav extends Component{
    render(){
        return (
                <div className='header-nav-con'>
                    <h1>
                        <a href="/index" title="瓜子二手车"></a>
                    </h1>
                    <div className='city'>
                        <p className='city-curr'>北京</p>
                    </div>
                    <div className='nav-list' >
                        <a className='active' href="#" >首页</a>
                        <a  href="#" >我要卖车</a>
                        <a  href="#" >我要买车</a>
                        <a  href="#" >瓜子服务</a>
                        <a  href="#" >瓜子金融</a>
                        <a  href="#" >毛豆新车</a>
                    </div>
                    <div className="header-phone">热线电话  400-060-6085</div>
                    <div className='login'><a  href="#"><Icon type="user" />登录</a></div>
                </div>
        )

    }
    
    componentDidMount(){
       
        let aA=document.querySelectorAll('.nav-list a')
        function clearActive() {
            for (let i = 0; i < aA.length; i++) {
                aA[i].className = "";
            }
        }
        for(let i=0;i<aA.length;i++){
            aA[i].onclick=function(){
                clearActive()
               aA[i].className='active'
            }
        }
    }
}