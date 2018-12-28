/**
 * @Author: tuber
 * @Date: 2018/12/27
 * @Version: 1.0.0
 * @Last Modified by: tuber
 * @last Modified time: 2018/12/27
 **/
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import NewsPage from "./NewsPage/NewsPage";

export default [
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
    },
    {
        path: '/news',
        name: 'NewsPage',
        component: NewsPage
    }
];