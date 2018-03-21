import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "main/theme";
export const styles = StyleSheet.create({
	main: {
		paddingTop: "10%",
		backgroundColor: PRIMARY_COLOR,
		flex: 1,
		alignItems: "center",
		flexDirection: "column"
	},
	text: {
		color: "white",
		fontSize: 20
	},
	input: {
		// width: "100%"
		marginTop: "10%"
	},
	mainInputContainer: {
		// flex: 1,
		// flexDirection: "column"
		width: "75%"
	},
	gotoStyle: { color: SECONDARY_COLOR, padding: "2%" },
	already: { fontSize: 11, alignSelf: "flex-end", paddingTop: "2%" }
});
