/**
 * @Author: tuber
 * @Date: 2018/12/27
 * @Version: 1.0.0
 * @Last Modified by: tuber
 * @last Modified time: 2018/12/27
 **/
import { LOGIN } from "../actions/LoginAction";

const initialState = {
    username: '',
    password: '',
    role: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                userInfo: action.payload
            }
        }
        default:
            return state;
    }
}