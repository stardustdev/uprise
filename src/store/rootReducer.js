import { combineReducers } from 'redux';

import userReducer from './user/reducer';
import manageReducer from './manage/reducer';

export default combineReducers({
  userReducer,
  manageReducer,
});
