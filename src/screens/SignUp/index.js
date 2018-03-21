import React, { Component } from "react";
import { Text, View, Button, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import BTN from "components/btn";
import Inputs from "components/Input";
import { onSignUP, toSignIN } from "./actions";
import { styles } from "./styles";

// import { styles } from "main/MainStyle";
class SignUp extends Component {
	onSignUP() {
		console.log("we have clicked here");
		this.props.onSignUP();
	}
	toSignIN() {
		console.log("we have clicked here");
		this.props.toSignIN();
	}
	render() {
		return (
			<View style={styles.main}>
				<View>
					<Text style={styles.text}>ISCRM</Text>
					<Text style={styles.text}>Sign UP Page</Text>
				</View>

				<KeyboardAvoidingView
					style={styles.mainInputContainer}
					behavior="padding"
				>
					<View style={{ height: "25%" }} />
					<View style={styles.input}>
						<Inputs title="username" label="username" />
					</View>
					<View style={styles.input}>
						<Inputs title="Password" label="Password" />
					</View>
					<View style={styles.input}>
						<BTN title="SignUp" onPress={this.onSignUP.bind(this)} />
						<Text style={styles.already}>
							already registerd{" "}
							<Text style={styles.gotoStyle} onPress={this.toSignIN.bind(this)}>
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

export default connect(mapStateToProps, { onSignUP, toSignIN })(SignUp);
