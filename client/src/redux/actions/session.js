import * as apiUtil from "../../util/session";
import UserAction from "../types/user";
import { receiveErrors } from "./error";

const { RECEIVE_CURRENT_USER, LOGOUT_USER } = UserAction;

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});
const logoutCurrentUser = () => ({
  type: LOGOUT_USER,
});

export const login = (user) => async (dispatch) => {
  const response = await apiUtil.login(user);
  console.log(response);

  const data = await response.data;
  console.log(response);

  if (response.status===200) {
    return dispatch(receiveCurrentUser(data));
  }
  return dispatch(receiveErrors(data));
};

export const signup = (user) => async (dispatch) => {
  const response = await apiUtil.signup(user);
  const data = await response.json();

  if (response.ok) {
    return dispatch(receiveCurrentUser(data));
  }
  return dispatch(receiveErrors(data));
};

export const logout = (user) => async (dispatch) => {
  const response = await apiUtil.logout();
  const data = await response.json();

  if (response.ok) {
    return dispatch(logoutCurrentUser());
  }
  return dispatch(receiveErrors(data));
};
