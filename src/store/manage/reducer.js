import * as actionTypes from '../actionTypes';

const initialState = {
  error: {
    message: null,
    state: false,
  },
  success: {
    message: null,
    state: false,
  },
};

const manageReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_SUCCESS_MESSAGE:
      return {
        ...state,
        success: {
          message: payload,
          state: true,
        },
      };
    case actionTypes.SET_ERROR_MESSAGE:
      return {
        ...state,
        error: {
          message: payload,
          state: true,
        },
      };
    default: {
      return state;
    }
  }
};

export default manageReducer;
