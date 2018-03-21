import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { Component } from "react";
import { SECONDARY_COLOR, PRIMARY_COLOR } from "main/theme";
const styles = StyleSheet.create({
	mainInputContainer: {
		width: "100%",
		backgroundColor: SECONDARY_COLOR,
		borderRadius: 25
	},
	btn: {
		color: PRIMARY_COLOR
	}
});
const BTN = props => (
	<View style={styles.mainInputContainer}>
		<Button style={styles.btn} title={props.title} onPress={props.onPress} />
	</View>
);

export default BTN;
