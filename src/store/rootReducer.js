import { combineReducers } from 'redux';

import userReducer from './user/reducer';
import manageReducer from './manage/reducer';
import advocateReducer from './advocate/reducer';

export default combineReducers({
  userReducer,
  manageReducer,
  advocateReducer,
});
