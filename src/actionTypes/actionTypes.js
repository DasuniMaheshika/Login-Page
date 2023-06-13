export const loginSuccess = () => {
  return {
    type: 'LOGIN_SUCCESS',
  };
};

export const loginFailure = (error) => {
  return {
    type: 'LOGIN_FAILURE',
    payload: error,
  };
};

export const resetError = () => {
  return {
    type: 'RESET_ERROR',
  };
};
