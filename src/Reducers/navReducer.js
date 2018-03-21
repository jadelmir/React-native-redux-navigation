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
			nextAction = NavigationActions.reset({
				index: 0,
				key: null,
				actions: [
					NavigationActions.navigate({
						routeName: "Main",
						params: { ...action.payload }
					})
				]
			});

			break;
		case "GOTO_SIGNIN":
			nextAction = NavigationActions.navigate({
				routeName: "Login",
				params: { ...action.payload }
			});
			break;
		case "GOTO_CALENDAR":
			console.log("it is in the router");
			nextAction = NavigationActions.navigate({
				routeName: "CalendarScreen",
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
