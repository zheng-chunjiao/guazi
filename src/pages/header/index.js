import React, { Component, Fragment } from "react"
import "../../assets/css/header/header.css"
import { Icon, Modal, Button, Form, Input, Checkbox } from 'antd'
import 'antd/dist/antd.css';
import {withRouter} from "react-router-dom"



class Header extends Component {
    state = {
        loading: false,
        visible: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { visible, loading } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <Fragment>
                <div className="header">
                    <h1>
                        <a href="" title="瓜子二手车">瓜子二手车</a>
                    </h1>
                    <div className="login">
                        <a className="login-my">

                            <div>
                                <a type="primary" onClick={this.showModal}>
                                    <Icon type="user" />  登录 </a>
                                <Modal
                                    visible={visible}
                                    title="瓜子二手车直卖网"
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                            >
                                <Form onSubmit={this.handleSubmit} className="login-form">
                                    <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="Username"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="Password"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(<Checkbox>记住我</Checkbox>)}
                                    <a className="login-form-forgot" href="">
                                        忘记密码
                                      </a>
                                    <Button type="primary" htmlType="submit" block className="login-form-button" id="btn">
                                        登录
                                      </Button>
                                    {/* Or <a href="">register now!</a> */}
                                </Form.Item>
                                  </Form>
                                 
                                </Modal>
                    </div>
                          
                            </a>
                    </div>
            <div className="header-phone">
                热线电话  400-060-6085
                        </div>
            <div className="nav-list">
                <a className="fl">毛豆新车</a>
                <a className="fr">瓜子金融</a>
                <a className="fl">瓜子服务</a>
                <a className="fl">我要卖车</a>
                <a className="fl">我要买车</a>
                <a className="fl">首页</a>
            </div>
                </div >
            </Fragment >
        )
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Header);
export default WrappedNormalLoginForm