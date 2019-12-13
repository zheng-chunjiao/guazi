import React,{Component} from 'react'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default class ContentChange extends Component{
    render(){
        return (
            <div className='content-change'>
                <Tabs defaultActiveKey="1" >
                    <TabPane   key="1">
                        <div className='img-box'>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn181115174544d28f1534f10bf4826b3072f21f243ebe.png?imageView2/2'/>
                                <p>两厢轿车</p>
                                <p className='p1'>0.18万起</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn1811151746295824e8bab7648f8b0d14d61394972fa0.png?imageView2/2'/>
                                <p>三厢轿车</p>
                                <p className='p1'>0.15万起</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn18111518174315fa9321f36c8d4ff56bcdb3e5d85281.png?imageView2/2'/>
                                <p>跑车</p>
                                <p className='p1'>2.38万起</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn18111518181754b768dafa98bd754201e0a7e774299b.png?imageView2/2'/>
                                <p>SUV</p>
                                <p className='p1'>0.50万起</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn181115181910598eea3b5c66ade1022e5ba17cb07c9b.png?imageView2/2'/>
                                <p>MPV</p>
                                <p className='p1'>0.72万起</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn1903211203205c132654095589a10e2866b35ea76e89.png?imageView2/2'/>
                                <p>面包车</p>
                                <p className='p1'>0.16万起</p>
                            </a>
                        </div>
                    </TabPane>
                    <TabPane  key="2">
                    <   div className='img-box'>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn181115182708299d6f5f31f91331488cfaaea89a0007.png?imageView2/2'/>
                                <p>跑车</p>
                                <p className='p2'>9.68万起</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn18111518284074d9b6733ecd02121b5c73ff2855fb9b.png?imageView2/2'/>
                                <p>SUV</p>
                                <p className='p2'>2.15万起</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn181115183038a030b53c8749241ec9b99d0927b4d8bf.png?imageView2/2'/>
                                <p>MPV</p>
                                <p className='p2'>2.50万起</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn1811151825247ac56493aac3d8714bd381ed8385251f.png?imageView2/2'/>
                                <p>两厢轿车</p>
                                <p className='p2'>2.44万起</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn181115182640a9f97dda2c103e942773c4ff9588329c.png?imageView2/2'/>
                                <p>三厢轿车</p>
                                <p className='p2'>2.38万起</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn19032112012283e9682e6d99f7071614a429f9632490.png?imageView2/2'/>
                                <p>面包车</p>
                                <p className='p2'>2.50万起</p>
                            </a>
                        </div>
                    </TabPane>
                    <TabPane  key="3">
                        <div className='img-box'>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn18111518525148272f676b2f2e98eb13475b9901a76c.png?imageView2/2'/>
                                <p>宝马5系</p>
                                <p className='p3'>成交价21.3万</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn181115185503faaa25ac2c78a0c08da9938e4b34d645.png?imageView2/2'/>
                                <p>本田雅阁</p>
                                <p className='p3'>成交价13.5万</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn18111518560687ecfe2622d5e06c6d01a2a6dd20ddeb.png?imageView2/2'/>
                                <p>大众高尔夫</p>
                                <p className='p3'>成交价6.8万</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn1811151913451b02227aa924a6b8c8122fa4aca99b39.png?imageView2/2'/>
                                <p>奔驰GLK级</p>
                                <p  className='p3'>成交价22.9万</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn181115191425c6616455f8c9303288008a8e8da138b6.png?imageView2/2'/>
                                <p>雪佛兰迈锐宝</p>
                                <p className='p3'>成交价7.3万</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn1811151915145e10f96d1b128a474a5267783a4eae12.png?imageView2/2'/>
                                <p>马自达昂克赛拉</p>
                                <p className='p3'>成交价8.66万</p>
                            </a>
                        </div>
                    </TabPane>
                    <TabPane  key="4">
                        <div className='img-box'>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn1811151916584ead660ab471cde379611c2c1af33f54.png?imageView2/2'/>
                                <p>5万内练手车</p>
                                <p className='p4'>每天只需几十元</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn181115191718ad814f72b8061226554eb9653c161843.png?imageView2/2'/>
                                <p>工薪族最爱</p>
                                <p className='p4'>月供只要1500</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn181115191842839fa4a4f94d77120cf4e602b0ecafbd.png?imageView2/2'/>
                                <p>SUV家庭代步首选</p>
                                <p className='p4'>同首付，买辆宽敞的</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn18111519185812383e73e8109c6a49bd8816bee98938.png?imageView2/2'/>
                                <p>准新车</p>
                                <p className='p4'>低首付高品质</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn181227200452df5d498ed1e9137ff44dc12e663db274.png?imageView2/2'/>
                                <p>奔驰宝马开回家</p>
                                <p className='p4'>首付不到5万元</p>
                            </a>
                            <a href='#' className='img-show'>
                                <img src='https://image1.guazistatic.com/qn1811151920537af84bd6a253fb661c771360b6543b12.png?imageView2/2'/>
                                <p>车主急售实惠</p>
                                <p className='p4'>买得早不如刚刚好</p>
                            </a>
                        </div>
                    </TabPane>
                </Tabs>
            </div>

        )
    }
    
}
