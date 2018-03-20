import { AppNavigator } from "../Router/navigator";
import { NavigationActions } from "react-navigation";
const initialState = AppNavigator.router.getStateForAction(
	// AppNavigator.router.getActionForPathAndParams("Login")
	NavigationActions.init()
);

export const navReducer = (state = initialState, action) => {
	let nextAction;
	switch (action.type) {
		case "GOTO_SIGNUP":
			console.log("we are in the nav reducer");
			nextAction = NavigationActions.navigate({
				routeName: "SignUpScene",
				params: { ...action.payload }
			});
			break;
		case "GOTO_MAIN":
			nextAction = NavigationActions.navigate({
				routeName: "MainSreen",
				params: { ...action.payload }
			});
			break;
		case "GOTO_SIGNIN":
			nextAction = NavigationActions.navigate({
				routeName: "Login",
				params: { ...action.payload }
			});
			break;
		default:
			return state;
	}
	const nextState = AppNavigator.router.getStateForAction(
		nextAction || action,
		state
	);

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
};
