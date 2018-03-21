import React, { Component } from "react";
import { Text, View, KeyboardAvoidingView, Keyboard } from "react-native";
import { goToSignUp, onSignin } from "./actions";
import { connect } from "react-redux";
import { styles } from "./styles";
import Inputs from "components/Input";
import BTN from "components/btn";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: "25%"
		};
		this._keyboardDidShow = this._keyboardDidShow.bind(this);
	}
	onSignUP() {
		this.props.goToSignUp();
	}
	onSignIn() {
		this.props.onSignin();
	}
	componentWillMount() {
		this.keyboardDidShowListener = Keyboard.addListener(
			"keyboardDidShow",
			this._keyboardDidShow
		);
		this.keyboardDidHideListener = Keyboard.addListener(
			"keyboardDidHide",
			this._keyboardDidHide
		);
	}

	_keyboardDidShow() {
		this.setState({
			height: "5%"
		});
	}

	_keyboardDidHide() {}

	render() {
		return (
			<View style={styles.main}>
				<View>
					<Text style={styles.text}>ISCRM</Text>
					<Text style={styles.text}>Sign In Page</Text>
				</View>

				<KeyboardAvoidingView
					style={styles.mainInputContainer}
					behavior="padding"
				>
					<View style={{ height: this.state.height }} />
					<View style={styles.input}>
						<Inputs title="username" label="username" />
					</View>
					<View style={styles.input}>
						<Inputs title="Password" label="Password" />
					</View>
					<View style={styles.input}>
						<BTN title="SignIn" onPress={this.onSignIn.bind(this)} />
						<Text style={styles.already}>
							already registerd{" "}
							<Text style={styles.gotoStyle} onPress={this.onSignUP.bind(this)}>
								Go to sign up
							</Text>
						</Text>
					</View>
				</KeyboardAvoidingView>
			</View>
		);
	}
}
const mapStateToProps = () => {
	return {};
};

export default connect(mapStateToProps, { goToSignUp, onSignin })(login);
