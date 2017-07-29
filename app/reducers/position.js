export const initialState = {
	position: null,
	elevation: null,
	technique_type: null
}

export const actionTypes = {
	SET_POSITION: 'SET_POSITION',
	SET_ELEVATION: 'SET_ELEVATION',
	SET_TECHNIQUE_TYPE: 'SET_TECHNIQUE_TYPE'
}


export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_POSITION:
			return Object.assign({}, state, { position: action.position })
		case actionTypes.SET_ELEVATION:
			return Object.assign({}, state, { elevation: action.elevation })
		case actionTypes.SET_TECHNIQUE_TYPE:
			return Object.assign({}, state, { technique_type: action.technique_type })
		default: return state
	}
}
