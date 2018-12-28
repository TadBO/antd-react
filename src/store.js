/**
 * @Author: tuber
 * @Date: 2018/12/27
 * @Version: 1.0.0
 * @Last Modified by: tuber
 * @last Modified time: 2018/12/27
 **/
import { createStore  } from 'redux';
import rootReducer from './reducers';

let store = createStore(rootReducer);

export default store;