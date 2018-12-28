/**
 * @Author: tuber
 * @Date: 2018/12/28
 * @Version: 1.0.0
 * @Last Modified by: tuber
 * @last Modified time: 2018/12/28
 **/
import React, { Component } from 'react';
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';
import './loginForm.css';
import store from '../store';
import { login } from "../actions/LoginAction";
import { withRouter } from 'react-router-dom'

class LoginForm extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props);
        this.props.form.validateFields((err, values) => {
            console.log(values);
            if (!err) {
                store.dispatch(login(values.username, values.password, 0));
                this.props.history.push('/');
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <h4>REACT MANAGEMENT</h4>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }, {pattern: new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/), message: '密码必须包含数字和字母且不少于6位'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住我</Checkbox>
                    )}
                    <a className="login-form-forgot" href="/forget">忘记密码</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    或者 <a href="/register">注册</a>
                </Form.Item>
            </Form>
        );
    }
}

const Login = Form.create()(LoginForm);

export default withRouter(Login);