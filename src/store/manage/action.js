import * as actionTypes from '../actionTypes';

export const setSuccessMessage = payload => ({
  type: actionTypes.SET_SUCCESS_MESSAGE,
  payload,
});

export const setErrorMessage = payload => ({
  type: actionTypes.SET_ERROR_MESSAGE,
  payload,
});

export const sendHelpDesk = payload => ({
  type: actionTypes.SEND_HELP_DESK,
  payload,
});
