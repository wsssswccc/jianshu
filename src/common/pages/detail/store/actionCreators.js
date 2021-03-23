import axios from 'axios';
import * as constants from './constants';

export const changenDetail = (data) => ({
  type: constants.CHANGE_DETAIL,
  title: data.title,
  content: data.content
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      console.log(res.data.data)
      dispatch(changenDetail(res.data.data));
    })
  }
}