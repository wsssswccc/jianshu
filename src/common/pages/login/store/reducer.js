import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  login: false
});


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login', true);
    case constants.LOGOUT:
      return state.set('login', false);
    default:
      return state;
  }
}
