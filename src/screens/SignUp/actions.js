export const onclick = payload => {
	console.log("we are here in action.js");
	return {
		type: "GOTO_SIGNIN",
		payload: payload
	};
};
