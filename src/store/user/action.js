import * as actionTypes from '../actionTypes';

export const userLogin = payload => ({
  type: actionTypes.USER_LOGIN,
  payload,
});

export const userLoginSuccess = payload => ({
  type: actionTypes.USER_LOGIN_SUCCESS,
  payload,
});

export const userLoginError = payload => ({
  type: actionTypes.USER_LOGIN_ERROR,
  payload,
});
