import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {getArticleList} from '../../../../api/api'

import { Tabs } from 'antd';

const { TabPane } = Tabs;

class ContentChange extends Component{
    state={
        arr1:[],
        arr2:[],
        arr3:[],
        arr4:[],
        arr5:[],
        arr6:[],
    }
    render(){
        const{arr1,arr2,arr3,arr4,arr5,arr6}=this.state
        return (
            <div id='content-type'>
                <div className='content-type-con'>
                    <h2 className='tit-h2'>热卖车型</h2>
                    <Tabs  defaultActiveKey="1" >
                        <TabPane tab="严选车"  key="1">
                            {
                                arr1.slice(0,12).map((item,index)=>{
                                    return (
                                        <Link to={`/details/${item.id}`}>
                                            <div className='type-box' key={index}>
                                                <img src={item.image}/>
                                                <div className='desc'>
                                                    <p>{item.name} {item.year} {item.displayment} {item.transmission}</p>
                                                    <p>{item.time}|{item.mileage}|到店服务</p>
                                                    <p>{item.price}万</p>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </TabPane>
                        <TabPane tab="最新上架" key="2">
                            {
                                arr2.slice(0,12).map((item,index)=>{
                                    return (
                                        <Link to={`/details/${item.id}`}>
                                            <div className='type-box' key={index}>
                                                <img src={item.image}/>
                                                <div className='desc'>
                                                    <p>{item.name} {item.year} {item.displayment} {item.transmission}</p>
                                                    <p>{item.time}|{item.mileage}|到店服务</p>
                                                    <p>{item.price}万</p>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </TabPane>
                        <TabPane tab="降价急售" key="3">
                            {
                                arr3.slice(0,12).map((item,index)=>{
                                    return (
                                        <Link to={`/details/${item.id}`}>
                                            <div className='type-box' key={index}>
                                                <img src={item.image}/>
                                                <div className='desc'>
                                                    <p>{item.name} {item.year} {item.displayment} {item.transmission}</p>
                                                    <p>{item.time}|{item.mileage}|到店服务</p>
                                                    <p>{item.price}万</p>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </TabPane>
                        <TabPane tab="准新车" key="4">
                            {
                                arr4.slice(0,12).map((item,index)=>{
                                    return (
                                        <Link to={`/details/${item.id}`}>
                                            <div className='type-box' key={index}>
                                                <img src={item.image}/>
                                                <div className='desc'>
                                                    <p>{item.name} {item.year} {item.displayment} {item.transmission}</p>
                                                    <p>{item.time}|{item.mileage}|到店服务</p>
                                                    <p>{item.price}万</p>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </TabPane>
                        <TabPane tab="练手车" key="5">
                            {
                                arr5.slice(0,12).map((item,index)=>{
                                    return (
                                        <Link to={`/details/${item.id}`}>
                                            <div className='type-box' key={index}>
                                                <img src={item.image}/>
                                                <div className='desc'>
                                                    <p>{item.name} {item.year} {item.displayment} {item.transmission}</p>
                                                    <p>{item.time}|{item.mileage}|到店服务</p>
                                                    <p>{item.price}万</p>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </TabPane>
                        <TabPane tab="SUV" key="6">
                            {
                                arr6.slice(0,12).map((item,index)=>{
                                    return (
                                        <Link to={`/details/${item.id}`}>
                                            <div className='type-box' key={index}>
                                                <img src={item.image}/>
                                                <div className='desc'>
                                                    <p>{item.name} {item.year} {item.displayment} {item.transmission}</p>
                                                    <p>{item.time}|{item.mileage}|到店服务</p>
                                                    <p>{item.price}万</p>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </TabPane>
                    </Tabs>
                    <div className='more'>更多降价急售</div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        getArticleList().then(res=>{
            // console.log(res.sss)
            let newArr1=[],
                newArr2=[],
                newArr3=[],
                newArr4=[],
                newArr5=[],
                newArr6=[];
            res.sss.map((item,index)=>{
                switch(item.carType){
                    case '1':
                        newArr1.push(item)
                        break;
                    case '2':
                        newArr2.push(item)
                        break;
                    case '3':
                        newArr3.push(item)
                        break;     
                    case '4':
                        newArr4.push(item)
                        break;
                    case '5':
                        newArr5.push(item)
                        break;   
                    case '6':
                        newArr6.push(item)
                        break;                
                }
            })
            // console.log(newArr1)
            this.setState(()=>{
                return{
                    arr1:newArr1,
                    arr2:newArr2,
                    arr3:newArr3,
                    arr4:newArr4,
                    arr5:newArr5,
                    arr6:newArr6
                }

            })
        })
    }
    
}
export default ContentChange