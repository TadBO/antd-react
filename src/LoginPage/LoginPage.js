/**
 * @Author: tuber
 * @Date: 2018/12/27
 * @Version: 1.0.0
 * @Last Modified by: tuber
 * @last Modified time: 2018/12/27
 **/
import React, { Component } from 'react';
import Login from './LoginForm';
import './login.css'
export default class LoginPage extends Component{
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="login-main">
                <Login className="login-form"/>
            </div>
        );
    }
}