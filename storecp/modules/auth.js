// Initial state

export const authInitState = {
  user: null,
  loading: false,
  activeAccount: null,
  error: null,
  token: null,
};

// Constants

export const AUTH_LOGIN_SET_LOADING = 'AUTH_LOGIN_SET_LOADING';
export const AUTH_LOGIN_SET_USER = 'AUTH_LOGIN_SET_USER';
export const AUTH_LOGIN_SET_TOKEN = 'AUTH_LOGIN_SET_TOKEN';
export const AUTH_LOGIN_SET_ERROR = 'AUTH_LOGIN_SET_ERROR';
export const AUTH_LOGIN_CLEAR = 'AUTH_LOGIN_CLEAR';
export const AUTH_ACCOUNT_SET_ACTIVE = 'AUTH_ACCOUNT_SET_ACTIVE';

// Reducer

export const authReducer = (state = authInitState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN_SET_LOADING: return { ...state, loading: payload };
    case AUTH_LOGIN_SET_USER: return { ...state, user: payload };
    case AUTH_LOGIN_SET_TOKEN: return { ...state, token: `Bearer ${payload}` };
    case AUTH_LOGIN_CLEAR: return { ...state, user: null };
    case AUTH_LOGIN_SET_ERROR: return { ...state, error: payload };
    case AUTH_ACCOUNT_SET_ACTIVE: return { ...state, activeAccount: payload };
    default: return state;
  }
};

// Creators

export const setLoginLoading = payload => ({ type: AUTH_LOGIN_SET_LOADING, payload });
export const setLoginUser = payload => ({ type: AUTH_LOGIN_SET_USER, payload });
export const setLoginToken = payload => ({ type: AUTH_LOGIN_SET_TOKEN, payload });
export const setLoginError = payload => ({ type: AUTH_LOGIN_SET_ERROR, payload });
export const setActiveAccount = payload => ({ type: AUTH_ACCOUNT_SET_ACTIVE, payload });
export const clearLogin = () => ({ type: AUTH_LOGIN_CLEAR });

// Thunks

export const login = (username, password, tenantId) => async (dispatch, getState, { api }) => {
  await dispatch(setLoginLoading(true));
  const { login } = api.authentication(getState);
  try {
    const { ok, authorizationToken, errorMessage } = await login({ username, password, tenantId });
    if (!ok) throw Error(errorMessage);

    window.document.cookie = `MediaBoxAuthToken=${authorizationToken}`;
    await dispatch(setLoginToken(authorizationToken));
    await dispatch(configureEvaporate());
    await dispatch(setLoginError(null));

    await Router.push('/');
  } catch (error) {
    await dispatch(setLoginError(error?.message));
  }
  await dispatch(setLoginLoading(false));
};

export const logout = () => async () => {
  window.document.cookie = 'MediaBoxAuthToken=;';
  window.document.location.href = '/login';
};

export const whoAmI = () => async (dispatch, getState, { api }) => {
  const { whoAmI } = api.authentication(getState);
  try {
    const user = await whoAmI();
    if (user.message) throw Error(user.message);

    await dispatch(fetchTenant(user.tenantId));
    await dispatch(setLoginUser(user));
  } catch (error) {
    console.error('whoAmI', error);
  }
};
