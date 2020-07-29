import { all, fork } from 'redux-saga/effects';

import userSaga from './user/saga';
import manageSaga from './manage/saga';
import advocateSaga from './advocate/saga';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(manageSaga), fork(advocateSaga)]);
}
