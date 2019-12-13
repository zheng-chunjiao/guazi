import React,{Component} from 'react'
import Header from './components/header'
import Content from './components/content'
import Footer from '../../public/components/footer'
import '../../assets/css/global.css'
import '../../assets/css/indexs/commen.css'
export default class Index extends Component{
    render(){
        return (
            <>
                <Header/>
                <Content/>
                <Footer/>
            </>
        )
}
}