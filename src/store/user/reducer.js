import * as actionTypes from '../actionTypes';

const initialState = {
  loggedIn: false,
  user: {
    first_name: 'Hello',
    last_name: 'Jiang',
    email: 'demo@devias.io',
    avatar: '/images/avatars/avatar_5.png',
    bio: 'Frontend Developer',
    role: 'ADMIN', // ['GUEST', 'USER', 'ADMIN']
  },
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
