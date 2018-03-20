const INITIAL_STATE = {};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "GOTO_SIGNUP":
			return { ...state };
		default:
			return state;
	}
};
