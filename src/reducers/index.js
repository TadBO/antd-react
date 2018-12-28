/**
 * @Author: tuber
 * @Date: 2018/12/27
 * @Version: 1.0.0
 * @Last Modified by: tuber
 * @last Modified time: 2018/12/27
 **/
import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';

const allReducers = {
    login: LoginReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;