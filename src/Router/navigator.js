import Login from "../screens/login/login";
import { StackNavigator } from "react-navigation";

export const AppNavigator = StackNavigator({
	Login: { screen: Login }
});
