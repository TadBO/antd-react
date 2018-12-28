/**
 * @Author: tuber
 * @Date: 2018/12/27
 * @Version: 1.0.0
 * @Last Modified by: tuber
 * @last Modified time: 2018/12/27
 **/
import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
export default class AuthPage extends Component {
    render() {
        return (
            <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>实名认证审核</Breadcrumb.Item>
            </Breadcrumb>

        );
    }
}