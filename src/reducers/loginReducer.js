const initialState = {
  loggedIn: false,
  error: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, loggedIn: true, error: '' };
    case 'LOGIN_FAILURE':
      return { ...state, loggedIn: false, error: action.payload };
    case 'RESET_ERROR':
      return { ...state, error: '' };
    default:
      return state;
  }
};

export default loginReducer;
