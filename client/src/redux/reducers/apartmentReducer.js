import { ApartmentTypes } from "../types/apartment";

const initialState = {
  apartments: [],
};

export const apartmentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ApartmentTypes.GET_ITEM:
      return { ...state, apartments: payload };
    case ApartmentTypes.ADD_ITEM:
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
