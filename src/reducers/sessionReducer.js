import * as actionTypes from 'src/actions';

const initialState = {
  loggedIn: true,
  user: {
    first_name: 'Kevin',
    last_name: 'Jiang',
    email: 'demo@devias.io',
    avatar: '/images/avatars/avatar_5.png',
    bio: 'Frontend Developer',
    role: 'ADMIN', // ['GUEST', 'USER', 'ADMIN']
  },
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SESSION_LOGIN: {
      return {
        ...initialState,
      };
    }

    case actionTypes.SESSION_LOGOUT: {
      return {
        ...state,
        loggedIn: false,
        user: {
          role: 'GUEST',
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default sessionReducer;
