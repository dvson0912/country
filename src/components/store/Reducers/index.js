import { combineReducers } from "redux";
import CountriesReducers from "./CountriesReducers";

const rootReducer = combineReducers({
  Countries: CountriesReducers,
});

export default rootReducer;
