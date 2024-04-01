function login(id, password) {
  return (dispatch, getState) => {
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: { id, password, authenticate: true },
    });
  };
}

function logout() {
  return (dispatch, getState) => {
    dispatch({
      type: 'LOGOUT',
      payload: { authenticate: false },
    });
  };
}
export const authenticateAction = { login, logout };
