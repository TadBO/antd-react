/**
 * @Author: tuber
 * @Date: 2018/12/26
 * @Version: 1.0.0
 * @Last Modified by: tuber
 * @last Modified time: 2018/12/26
 **/
import React, { Component } from 'react';
import {Layout, Menu,  Icon} from 'antd';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import AuthPage from './AuthPage';
const {SubMenu} = Menu;
const { Content, Sider} = Layout;
class HomePage extends Component{
    render() {
        return (
           <Router>
               <Layout>
                   <Sider width={200} style={{background: '#fff'}}>
                       <Menu
                           mode="inline"
                           defaultSelectedKeys={['1']}
                           defaultOpenKeys={['sub1']}
                           style={{height: '100%', borderRight: 0}}
                       >
                           <SubMenu key="sub1" title={<span><Icon type="user"/>用户管理</span>}>
                               <Menu.Item key="1">
                                   <Link to="/home/auth">实名认证审核</Link>
                               </Menu.Item>
                               <Menu.Item key="2">
                                   <Link to="/home/code">二维码审核</Link>
                               </Menu.Item>
                               <Menu.Item key="3">
                                   <Link to="/home/company">公司审核</Link>
                               </Menu.Item>
                           </SubMenu>
                           <SubMenu key="sub2" title={<span><Icon type="laptop"/>角色管理</span>}>
                               <Menu.Item key="4">
                                   <Link to="/home/power">权限管理</Link>
                               </Menu.Item>
                           </SubMenu>
                           <SubMenu key="sub3" title={<span><Icon type="notification"/>日志管理</span>}>
                               <Menu.Item key="5">
                                   <Link to="/home/log">操作日志</Link>
                               </Menu.Item>
                           </SubMenu>
                           <SubMenu key="sub4" title={<span><Icon type="notification"/>报表功能</span>}>
                               <Menu.Item key="6">
                                   <Link to="/home/operate">运营数据统计</Link>
                               </Menu.Item>
                               <Menu.Item key="7">
                                   <Link to="/home/enterprise">企业数据统计</Link>
                               </Menu.Item>
                           </SubMenu>
                       </Menu>
                   </Sider>
                   <Layout style={{padding: '0 24px 24px'}}>
                       <Content style={{
                           background: '#fff', padding: 24, margin: 0, minHeight: 280,
                       }}
                       >
                         <Switch>
                             <Route exact  path="/home/auth" component={AuthPage}/>
                             <Redirect  to="/home/auth"/>
                         </Switch>
                       </Content>
                   </Layout>
               </Layout>
           </Router>
        )
    }
}

export default HomePage;