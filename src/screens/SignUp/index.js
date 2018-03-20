import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { onclick } from "./actions";
class SignUp extends Component {
	onClickButton() {
		console.log("we have clicked here");
		this.props.onclick();
	}
	render() {
		return (
			<View>
				<Text>H@ H@H@H@H@</Text>
				<Button
					onPress={this.onClickButton.bind(this)}
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

export default connect(mapStateToProps, { onclick })(SignUp);
