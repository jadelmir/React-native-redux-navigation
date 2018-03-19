import { combineReducers } from "redux";
import { navReducer } from "./navReducer";
export default (appReducer = combineReducers({
	nav: navReducer
}));
