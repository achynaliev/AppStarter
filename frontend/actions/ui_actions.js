export const SET_LOGIN_URL = "SET_LOGIN_URL";
export const REMOVE_LOGIN_URL = "REMOVE_LOGIN_URL";

export const setLoginUrl = (url) => ({
  type: SET_LOGIN_URL,
  url
});

export const removeLoginUrl = () => ({
  type: REMOVE_LOGIN_URL,
});
