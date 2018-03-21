import Login from "login/";
import SignUp from "SignUp/";
import MainScreen from "Main/";
import { StackNavigator, HeaderBackButton } from "react-navigation";
import Calendar from "calendar/";
import React from "react";

const navigationOptions = ({ navigation }) => ({
	headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
});
export const Auth = StackNavigator(
	{
		Login: { screen: Login },
		SignUpScene: { screen: SignUp }
	},
	{
		headerMode: "none",
		initialRouteName: "Login"
	}
);

export const MainStack = StackNavigator({
	Home: { screen: MainScreen },
	CalendarScreen: { screen: Calendar, navigationOptions: { title: "Calendar" } }
});
export const mainNavigator = StackNavigator(
	{
		MainTab: { screen: MainStack }
	},
	{
		headerMode: "none"
	}
);
export const AppNavigator = StackNavigator(
	{
		Auth: { screen: Auth },
		Main: { screen: mainNavigator }
	},
	{
		headerMode: "none",
		mode: "modal"
	}
);
