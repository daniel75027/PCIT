import {
	CLIENT_SAVE_SUCCESS,
	CLIENT_CREATE,
	CLIENT_DELETE,
	CLIENTS_FETCH_SUCCESS,
	SESSION_CREATE,
	SESSION_SAVE,
	SESSION_DELETE,
	SESSION_FETCH_SUCCESS,
	FORM_CREATE,
	FORM_FETCH_SUCCESS
} from "actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CLIENT_SAVE_SUCCESS:
		case CLIENT_CREATE:
		case CLIENT_DELETE:
		case CLIENTS_FETCH_SUCCESS:
			return action.payload;

		case SESSION_CREATE:
		case SESSION_SAVE:   
		case SESSION_DELETE:
		case SESSION_FETCH_SUCCESS:
			return {...state, [action.uid]: {...state[action.uid], sessions: action.payload }};

		case FORM_CREATE:
			return {...state, [action.uid]: {...state[action.uid], sessions: {...state[action.uid].sessions, [action.sessionid]: {...state[action.uid].sessions[action.sessionid], forms: action.payload } } }};
		// case FORM_FETCH_SUCCESS:
		//   return {...state, [action.uid]: {...state[action.uid], forms: action.payload}};
		default:
			return state;
	}
};
