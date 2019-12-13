import React,{Component} from 'react'

class ContentMaodou extends Component{
    render(){
        return(
            <div className='content-maodou-con'>
                <h3>毛豆新车</h3>
                <div className='maodou-show'>
                    <div className='adver adver1'>
                        <img src='https://image1.guazistatic.com/qn18110911494912993054599665c121867e8d33faa46a.png?imageView2/2' alt=''/>
                    </div>
                    <div className='adver adver2'>
                        <img src='https://image1.guazistatic.com/qn1812272001563867bdf5e6e568c32baa88c7922d1b02.png?imageView2/2' alt=''/>
                        <p className='adver-p1'>1万开新车</p>
                        <p className='adver-p2'>质优价低</p>
                    </div>
                    <div className='adver adver3'>
                        <div className='adver3-div'>
                            <img src='https://image1.guazistatic.com/qn181227170248e4a541c2ee17d80371666f75aef55354.png?imageView2/2' alt=''/>
                            <div className='car-type'>
                                <p className='adver-p1'>大众专场</p>
                                <p className='adver-p2'> 国民好车 </p>
                            </div>
                        </div>
                        <div className='adver3-div'>
                            <img src='https://image1.guazistatic.com/qn181227200220af31a7a8c79ef8208aa961c7bb5839b8.png?imageView2/2' alt=''/>
                            <div className='car-type'>
                                <p className='adver-p1'>月供2000起</p>
                                <p className='adver-p2'>分期无忧负担小</p>
                            </div>
                        </div> 
                    </div>
                    <div className='adver adver4'>
                        <img src='https://image1.guazistatic.com/qn1812271703149280569415649c5b9192439686a4fa1e.png?imageView2/2' alt=''/>
                        <p className='adver-p1'>爆款SUV</p>
                        <p className='adver-p2'>月供 1800起 </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContentMaodou