import React,{Component,Fragment} from "react"
import DetailsContent from "./components/Content"
import Header from "../header"
import TextBox from "./components/Textbox"
import Footer from "../footer"
import "../../assets/css/details/details.css"
import "../../assets/css/footer/footer.css"
import { Icon } from 'antd'

class Details extends Component{
    render(){
        return(
            <Fragment>
                <div className="jstop">
                    <Header/>
                </div>
                {/* Content 中间层 */}
                <div className="content">
                    {/* 顶部 */}
                   <div className="placeon">
                      <div className="right">
                         车牌号 ： HC-92109486
                         <span className="car-error">
                            <Icon type="close-circle" />
                            车源信息纠错
                         </span>
                      </div>
                   </div>
                     {/* 下侧 */}
                     <div className="infor clearfix">
                         {/* 左侧 */}
                         <div className="product-detail" style={{height:"530px",background:"pink"}}>
                             <DetailsContent/>
                         </div>
                         {/* 右侧 */}
                         <div className="textbox">
                            <TextBox/>
                         </div>
                     </div>
                </div>
                {/* 底部 */}
                <div className="footer">
                    <Footer/>
                </div> 
            </Fragment>
        )
    }
}
export default Details