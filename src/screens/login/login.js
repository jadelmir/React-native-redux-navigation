import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { goToSignUp, onSignin } from "./actions";
import { connect } from "react-redux";
class login extends Component {
	onClickButton() {
		this.props.goToSignUp();
	}
	onSignIn() {
		this.props.onSignin();
	}
	render() {
		return (
			<View>
				<Text>H@ H@H@H@H@</Text>
				<Button
					onPress={this.onClickButton.bind(this)}
					title="go to sign up"
					color="#841584"
				/>
				<Button
					onPress={this.onSignIn.bind(this)}
					title="go to MainSreen"
					color="#841584"
				/>
			</View>
		);
	}
}
const mapStateToProps = () => {
	return {};
};

export default connect(mapStateToProps, { goToSignUp, onSignin })(login);
