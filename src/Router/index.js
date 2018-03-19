import { addNavigationHelpers } from "react-navigation";
import { connect } from "react-redux";
import {
	createReduxBoundAddListener,
	createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import React, { Component } from "react";
import { AppNavigator } from "./navigator";

const middleware = createReactNavigationReduxMiddleware(
	"root",
	state => state.nav
);
const addListener = createReduxBoundAddListener("root");
class App extends Component {
	render() {
		return (
			<AppNavigator
				navigation={addNavigationHelpers({
					dispatch: this.props.dispatch,
					state: this.props.nav,
					addListener
				})}
			/>
		);
	}
}

const mapStateToProps = state => ({
	nav: state.nav
});

export default (AppWithNavigationState = connect(mapStateToProps)(App));
