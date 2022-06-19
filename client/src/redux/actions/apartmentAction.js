import { ApartmentTypes } from "../types/apartment";
import axios from "axios";
const { GET_ITEM, ADD_ITEM, DELETE_ITEM } = ApartmentTypes;

export const getItem = (dispatch) => {
  axios
    .get("/")
    .then((res) => {
      dispatch({
        type: GET_ITEM,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getItemId = (id) => (dispatch) => {
  axios
    .get(`/${id}`)
    .then((res) => {
      dispatch({
        type: GET_ITEM,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const addItem = (data) => (dispatch) => {
  axios
    .post("/", data)
    .then((res) =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const deleteItem = (id) => (dispatch) => {
  axios
    .delete(`/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_ITEM,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
