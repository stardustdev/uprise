import { put, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actionTypes';
import * as actions from './action';

function* userLogin(actionData) {
  try {
    const user = {
      first_name: 'Kevin',
      last_name: 'Jiang',
      email: 'demo@devias.io',
      avatar: '/images/avatars/avatar_5.png',
      bio: 'Frontend Developer',
      role: 'ADMIN', // ['GUEST', 'USER', 'ADMIN']
    };
    yield put(actions.userLoginSuccess(user));
  } catch {
    yield put(actions.userLoginError());
  }
}

export default function*() {
  yield takeLatest(actionTypes.USER_LOGIN, userLogin);
}
