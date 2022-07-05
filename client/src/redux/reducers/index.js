import { combineReducers } from "redux";
import { apartmentReducer } from "./apartmentReducer";
import { session } from "./sessionReducer";
import { error } from "./errorReducer";

export default combineReducers({
  session,
  error,
  apartments: apartmentReducer,
});
