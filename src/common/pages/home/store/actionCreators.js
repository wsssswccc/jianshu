import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList,
  topicList: result.topicList,
  writerList: result.writerList
});

const addMoreList = (result, nextPage) => ({
  type: constants.ADD_MORE_LIST,
  list: fromJS(result),
  nextPage
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    })
  }
};

export const getMoreList = (articlePage) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?articlePage=' + articlePage).then((res) => {
      dispatch(addMoreList(res.data.data, articlePage + 1));
    })
  }
};

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_TOP_SHOW,
  show
});