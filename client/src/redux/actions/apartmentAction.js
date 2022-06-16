import { ApartmentTypes } from "../types/apartment";

export const getItem = (item) => {
  return {
    type: ApartmentTypes.GET_ITEM,
    payload: item,
  };
};

export const addItem = (item) => {
  return {
    type: ApartmentTypes.ADD_ITEM,
    payload: item,
  };
};

export const deleteItem = (item) => {
    return {
      type: ApartmentTypes.DELETE_ITEM,
      payload: item,
    };
  };
  
export const updateItem = (item) => {
    return {
      type: ApartmentTypes.UPDATE_ITEM,
      payload: item,
    };
  };
  