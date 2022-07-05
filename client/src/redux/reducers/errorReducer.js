import  UserAction  from "../types/user";
const { RECEIVE_ERRORS, CLEAR_ERRORS, RECEIVE_CURRENT_USER } = UserAction;

export const error = (state = "", { message, type }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_ERRORS:
      return message;
    case RECEIVE_CURRENT_USER:
    case CLEAR_ERRORS:
      return "";
    default:
      return state;
  }
};
