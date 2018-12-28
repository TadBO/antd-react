/**
 * @Author: tuber
 * @Date: 2018/12/28
 * @Version: 1.0.0
 * @Last Modified by: tuber
 * @last Modified time: 2018/12/28
 **/
import Main from "./main";
import LoginPage from "./LoginPage/LoginPage";
import Register from "./register";

export default [
    {
        path: '/',
        name: 'Main',
        component: Main,
        auth: true
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage,
        auth: false
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        auth: false
    }
]