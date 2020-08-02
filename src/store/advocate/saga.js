import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../actionTypes';
import * as actions from './action';
import * as manageActions from '../manage/action';
import * as Constatns from 'src/utils/constants';

function* getAdvocateList(actionData) {
  try {
    // const { searchKey, pagination, sort } = actionData.payload;
    const response = yield axios.get(Constatns.API_DOMAIN + 'advocates');
    if (response.data) {
      yield put(actions.getAdvocateListSuccess(response.data.advocates));
    }
  } catch (error) {
    yield put(manageActions.setErrorMessage(error));
  }
}

export default function*() {
  yield takeLatest(actionTypes.GET_ADVOCATE_LIST, getAdvocateList);
}
