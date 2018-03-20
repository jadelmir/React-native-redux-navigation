import { combineReducers } from "redux";
import { navReducer } from "./navReducer";
import loginReducer from "../screens/login/LoginReducer";
export default (appReducer = combineReducers({
	nav: navReducer,
	login: loginReducer
}));
