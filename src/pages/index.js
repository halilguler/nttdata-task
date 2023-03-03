import { combineReducers } from "@reduxjs/toolkit";
import cardsSlice from "../features/index";
const reducer = combineReducers({
  cardsSlice,
});

export default reducer;
