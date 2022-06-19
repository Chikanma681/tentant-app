import { UserAction } from "../types/user";

export const getUser = (user) => {
  return {
    type: UserAction.GET_USER,
    payload: user,
  };
};

export const addUser = (user) => {
  return {
    type: UserAction.ADD_USER,
    payload: user,
  };
};

export const deleteUser = (user) => {
  return {
    type: UserAction.DELETE_USER,
    payload: user,
  };
};

export const updateUser = (user) => {
  return {
    type: UserAction.UPDATE_USER,
    payload: user,
  };
};
