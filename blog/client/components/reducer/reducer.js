export function login(name) {
		return {
			name:name
	}
}

const initialState = {
	name:name
}

export default function reducer(state=initialState, action) {
	switch(action.type) {
		case 'login' :
		state = {...state,
			name:name
		}
		break;
	}

	return state;
}