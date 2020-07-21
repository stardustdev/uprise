import { put, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actionTypes';
import * as actions from './action';

function* sendHelpDesk(actionData) {
  try {
  } catch (error) {
    yield put(actions.setErrorMessage(error));
  }
}

export default function*() {
  yield takeLatest(actionTypes.SEND_HELP_DESK, sendHelpDesk);
}
