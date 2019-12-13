import React, { Component, Fragment } from "react"
import "../../../assets/css/details/details.css"
import "swiper/css/swiper.min.css"
import Swiper from "swiper/js/swiper.min.js"
import {getArticleList} from "../../../api/api"
import {withRouter} from 'react-router-dom'



class Content extends Component {
   state = {
     data : [],
   }
 // 请求数据
 getListRequest=(id)=>{
   
  getArticleList().then(res=>{
    let data = res.sss.filter(item=>{
       return item.id == id
     })
     this.setState({
        data
      })

  }
  )
}
    render() {
      const {data}=this.state
        return (
            <Fragment>
                <div style={{height:"530px"}} >
                <div className="swiper-container gallery-top" style={{height:"400px"}}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" style={{background:data[0].image}}></div>
                        <div className="swiper-slide" style={{background:data[0].image}}></div>
                        <div className="swiper-slide" style={{background:data[0].image}}></div>
                        <div className="swiper-slide" style={{background:data[0].image}}></div>
                        <div className="swiper-slide" style={{background:data[0].image}}></div>
                    </div>
                    <div className="swiper-button-next swiper-button-white"></div>
                    <div className="swiper-button-prev swiper-button-white"></div>
                </div>
                <div className="swiper-container gallery-thumbs">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide1" style={{background:data[0].image,backgroundSize:"100% 100%"}}></div>
                        <div className="swiper-slide1" style={{background:data[0].image,backgroundSize:"100% 100%"}}></div>
                        <div className="swiper-slide1" style={{background:data[0].image,backgroundSize:"100% 100%"}}></div>
                        <div className="swiper-slide1" style={{background:data[0].image,backgroundSize:"100% 100%"}}></div>
                        <div className="swiper-slide1" style={{background:data[0].image,backgroundSize:"100% 100%"}}></div>
                    </div>
                </div>
              </div>
            </Fragment> 
        )
    }

    componentDidMount() {
        var galleryThumbs =new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
          });
          var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            thumbs: {
              swiper: galleryThumbs,
              swiper: galleryTop
            }
          });
      
          
      //  this.getListRequest(this.props.location.state.data)
      this.getListRequest(this.props.match.params.id)
      // this.getArticleList(this.data)

      
    }

    
}
export default withRouter(Content)