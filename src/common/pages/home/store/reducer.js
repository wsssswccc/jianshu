import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  showScoll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        topicList: fromJS(action.topicList),
        writerList: fromJS(action.writerList)
      });
};

const adddMoreList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextPage
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case constants.ADD_MORE_LIST:
      return adddMoreList(state, action);
    case constants.TOGGLE_TOP_SHOW:
      return state.set('showScoll', action.show);
    default:
      return state;
  }
}
