import * as actionTypes from '../actionTypes';

export const getAdvocateList = payload => ({
  type: actionTypes.GET_ADVOCATE_LIST,
  payload,
});

export const getAdvocateListSuccess = payload => ({
  type: actionTypes.GET_ADVOCATE_LIST_SUCCESS,
  payload,
});
