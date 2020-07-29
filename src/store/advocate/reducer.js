import * as actionTypes from '../actionTypes';

const initialState = {
  advocateList: [],
};

const advocateReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GET_ADVOCATE_LIST_SUCCESS:
      return {
        ...state,
        advocateList: [...payload],
      };

    default:
      return state;
  }
};

export default advocateReducer;
