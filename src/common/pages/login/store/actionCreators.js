import axios from 'axios';
import * as constants from './constants';

export const changeLogin = () => ({
  type: constants.CHANGE_LOGIN
});

export const logOut = () => ({
  type: constants.LOGOUT
});

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
      const result = res.data.data;
      if(result) {
        dispatch(changeLogin());
      } else {
        alert('登陆失败');
      }
    }).catch((err) => {
      alert('出错啦：' + err);
    })
  }
};
