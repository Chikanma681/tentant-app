import UserAction from "../types/user";

const { RECEIVE_CURRENT_USER, LOGOUT_USER } = UserAction;

const _nullSession = { userId: null, username: null };
export const session = (state = _nullSession, { type, user }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_CURRENT_USER:
      return user;
    case LOGOUT_USER:
      return _nullSession;
    default:
      return state;
  }
};
