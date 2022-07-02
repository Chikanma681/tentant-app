import { combineReducers } from "redux";
// import { apartmentReducer } from "./apartmentReducer";
// import { userReducer } from "./userReducer";\
import { session } from "./sessionReducer";
import { error } from "./errorReducer";

export default combineReducers({
  session,
  error,
});
