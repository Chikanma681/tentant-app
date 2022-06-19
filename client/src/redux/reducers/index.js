import { combineReducers } from "redux";
import { apartmentReducer } from "./apartmentReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  apartment: apartmentReducer,
  user: userReducer,
});
