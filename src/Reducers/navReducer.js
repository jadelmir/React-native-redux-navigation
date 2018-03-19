import { AppNavigator } from "../Router/navigator";

const initialState = AppNavigator.router.getStateForAction(
	AppNavigator.router.getActionForPathAndParams("Login")
);

export const navReducer = (state = initialState, action) => {
	const nextState = AppNavigator.router.getStateForAction(action, state);

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
};
