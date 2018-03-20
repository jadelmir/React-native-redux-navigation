export const goToSignUp = payload => {
	console.log("we are here in gotp");
	return {
		type: "GOTO_SIGNUP",
		payload: payload
	};
};
export const onSignin = payload => {
	console.log("we are here in gotp");
	return {
		type: "GOTO_MAIN",
		payload: payload
	};
};
