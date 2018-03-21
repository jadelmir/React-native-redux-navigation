import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { Component } from "react";
import { SECONDARY_COLOR } from "main/theme";
const styles = StyleSheet.create({
	main: {
		borderBottomWidth: 1,
		width: "100%"
	},
	mainInputContainer: {
		width: "100%"
	},
	input: {
		marginTop: "5%",
		paddingBottom: "5%",
		color: SECONDARY_COLOR
	}
});
const Inputs = props => (
	<View style={styles.mainInputContainer}>
		<Text>{props.label} </Text>

		<View style={styles.main}>
			<TextInput
				style={styles.input}
				placeholder={props.title}
				underlineColorAndroid="transparent"
			/>
		</View>
	</View>
);

export default Inputs;
