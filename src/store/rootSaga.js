import { all, fork } from 'redux-saga/effects';

import userSaga from './user/saga';
import manageSaga from './manage/saga';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(manageSaga)]);
}
