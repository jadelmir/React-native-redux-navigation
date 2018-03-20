import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";
class Main extends Component {
	onClickButton() {
		console.log("btn clicked");
	}
	render() {
		return (
			<View>
				<Text>welcome to main page</Text>
				<Button
					onPress={this.onClickButton}
					title="go to sign in"
					color="#841584"
				/>
			</View>
		);
	}
}
const mapStateToProps = () => {
	return {};
};

export default connect(mapStateToProps, {})(Main);
