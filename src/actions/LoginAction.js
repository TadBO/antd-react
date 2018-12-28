/**
 * @Author: tuber
 * @Date: 2018/12/27
 * @Version: 1.0.0
 * @Last Modified by: tuber
 * @last Modified time: 2018/12/27
 **/
export const LOGIN = 'LOGIN';
export function login(username, password, role) {
    return {
        type: LOGIN,
        payload: {username, password, role}
    }
}