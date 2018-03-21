import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { gotoCalendar } from "./actions";
import BTN from "components/btn";
class Main extends Component {
	goToCalendar() {
		this.props.gotoCalendar();
	}
	render() {
		return (
			<View>
				<Text>welcome to main page</Text>
				<BTN title="Calendar" onPress={this.goToCalendar.bind(this)} />
			</View>
		);
	}
}
const mapStateToProps = () => {
	return {};
};

export default connect(mapStateToProps, { gotoCalendar })(Main);
