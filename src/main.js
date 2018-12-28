/**
 * @Author: tuber
 * @Date: 2018/12/27
 * @Version: 1.0.0
 * @Last Modified by: tuber
 * @last Modified time: 2018/12/27
 **/
import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import {Layout, Menu} from "antd";
import Routers from './routers';
import store from './store';


const {Header, Footer} = Layout;

export default class Main extends Component{
    constructor() {
        super();
        this.state = {
            userInfo: ''
        }
    }
    componentDidMount() {
        console.log(store.getState());
        this.setState({
            userInfo: store.getState().login
        });
    }
    render() {
        return (
            <Router>
                <Layout>
                    {/*头部*/}
                    <Header className="header">
                        <div className="logo"/>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{lineHeight: '64px'}}
                        >
                            <Menu.Item key="1"> <Link to="home">首页</Link></Menu.Item>
                            <Menu.Item key="2"> <Link to="news">新闻</Link></Menu.Item>
                            <Menu.Item key="3"> <Link to="about">关于我们</Link></Menu.Item>
                        </Menu>
                        <div className="user">
                            <p>欢迎您：{this.state.userInfo.username}</p>
                        </div>
                    </Header>
                    {/*主体部分*/}
                    <div className="main">
                        <Switch>
                            {
                                Routers.map((item, index) => {
                                    return (
                                        <Route exact path={item.path}  key={index} component={item.component}/>
                                    )
                                })
                            }
                            <Redirect to="/home"/>
                        </Switch>
                    </div>
                    {/*底部*/}
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2018 Created by Tuber
                    </Footer>
                </Layout>
            </Router>
        )
    }
}