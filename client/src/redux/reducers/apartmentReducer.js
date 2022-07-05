import { ApartmentTypes } from "../types/apartment";
const { GET_ITEM, ADD_ITEM, DELETE_ITEM } = ApartmentTypes;

const initialState = {
  apartments: [],
};

export const apartmentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ITEM:
      return {
        ...state,
        apartments: payload,
      };
    case ADD_ITEM:
      return {
        apartments: [...state.apartments, payload],
      };
    case DELETE_ITEM:
      return {
        ...state,
        apartments: state.apartments.filter(
          (apartment) => apartment.id !== payload
        ),
      };
    default:
      return state;
  }
};
