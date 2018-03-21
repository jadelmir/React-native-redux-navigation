export const toSignIN = payload => {
	console.log("we are here in action.js");
	return {
		type: "GOTO_SIGNIN",
		payload: payload
	};
};

export const onSignUP = payload => {
	return {
		type: "GOTO_MAIN",
		payload: payload
	};
};
