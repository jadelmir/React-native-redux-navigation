import Login from "../screens/login/login";
import SignUp from "../screens/SignUp/";
import MainScreen from "../screens/Main";
import { StackNavigator } from "react-navigation";

export const Auth = StackNavigator(
	{
		Login: { screen: Login },
		SignUpScene: { screen: SignUp }
	},
	{
		initialRouteName: "Login"
	}
);
export const Main = StackNavigator({
	MainSreen: { screen: MainScreen }
});
export const AppNavigator = StackNavigator(
	{
		Auth: Auth,
		MainSreen: Main
	},
	{
		headerMode: "none"
	}
);
