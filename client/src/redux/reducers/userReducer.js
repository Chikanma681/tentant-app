import { UserAction } from "../types/user";

const initialState = {
  apartments: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UserAction.GET_ITEM:
      return { ...state, apartments: payload };
    case UserAction.ADD_ITEM:
      return { ...state, apartments: [payload, ...state.apartments] };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.apartments.filter(
          (apartment) => apartment._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
