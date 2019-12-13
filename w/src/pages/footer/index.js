import React,{Component,Fragment} from "react"
import "../../assets/css/footer/footer.css"
 
class Footer extends Component{
    render(){
        return(
          <Fragment>
             <div className="company-info clearfix"style={{background:"#2a2c37"}}>
                 <div className="instructions-guazi-name">
                     瓜子®/瓜子二手车®等带有®标记的内容均是车好多旧机动车经纪（北京）有限公司的注册商标。 </div>
                     <div className="footer-logo">  </div>
                 <div className="phone-email">
                     <p>咨询电话：
                         <i>400-060-6085</i>
                         <span>(周一至周日 8：00-21：00)</span>
                         <br/>
                           服务监督热线
                           <i>400-066-8780</i>
                           <span>(周一至周日 9：00-21：00)</span>
                     </p>
                     <p>
                        互联网违法或不良信息举报联系方式：
                        <br/>
                           邮箱：
                           <i>jubao@guazi.com</i>
                           &nbsp;&nbsp;电话
                           <i>010-89191670</i>
                     </p>
                 </div>
                 <div className="ewm-box">
                    <img src="//image1.guazistatic.com/qn1909231407351f42a7e2be00ae422dc6c1e57ae92571.png"/>
                    <p className="ewm-tit">关注微信</p>
                 </div>
                 <div className="ewm-box">
                     <span className="bg-old-ewm"></span>
                     <p className="ewm-tit">下载APP</p>
                     <span className="ewm-tit-tip">瓜分十亿红包</span>
                 </div>
                 <div className="basic-info">
                     <div className="info-link">
                         <a href="#">关于瓜子</a>
                         <a href="#">集团介绍</a>
                         <a href="#">加入我们</a>
                         <a href="#">联系我们</a>
                         <a href="#">服务保障</a>
                         <a href="#">隐私声明</a>
                         <a href="#">服务条款</a>
                         <a href="#">营业执照</a>
                         <a href="#">环评公示</a>
                     </div>
                     <p className="arc-info">Copyright 2019 www.guazi.com All Rights Reserved</p>
                     <p className="arc-info">京ICP备15053955号  ICP证151071号 </p>
                     {/* <div className="protect clearfix">
                        <a className="police">京公网安备11010502037713</a>
                     </div> */}
                 </div>
             </div>
          </Fragment>
        )
    }
}
export default Footer