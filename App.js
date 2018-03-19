import { createStore, applyMiddleware } from "redux";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import { Provider } from "react-redux";
import React from "react";
import appReducer from "./src/Reducers";
import AppWithNavigationState from "./src/Router";
// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware(
	"root",
	state => state.nav
);
const store = createStore(appReducer, applyMiddleware(middleware));

export default class Root extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}
