import React,{Fragment,Component} from 'react'
import ContentChange from './contentChange'
import ContentType from './contentType'
import ContentMaodou from './contentMaodou'
import {getArticleList} from '../../../../api/api'
import '../../../../assets/css/indexs/commen.css'
import '../../../../assets/css/indexs/contentChange.css'
import '../../../../assets/css/indexs/contentType.css'
import '../../../../assets/css/indexs/contentMaodou.css'
export default class Content extends Component{
    render(){
        return (
            <Fragment>
                <ContentChange/>
                <ContentType/>
                <ContentMaodou/>
            </Fragment>
        )
    }
}