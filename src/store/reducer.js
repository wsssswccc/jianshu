import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../common/pages/home/store';
import { reducer as detailReducer } from '../common/pages/detail/store';
import { reducer as loginReducer } from '../common/pages/login/store';

const reducer =  combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
});

export default reducer;
