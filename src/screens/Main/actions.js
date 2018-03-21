export const gotoCalendar = payload => {
	console.log("action created");
	return {
		type: "GOTO_CALENDAR",
		payload: payload
	};
};
