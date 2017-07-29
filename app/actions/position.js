export const SET_POSITION = "SET_POSITION";
export function setPosition(position) {
	return {
		type: SET_POSITION,
		position
	};
}

export const SET_ELEVATION = "SET_ELEVATION";
export function setElevation(elevation) {
	return {
		type: SET_ELEVATION,
		elevation
	};
}

export const SET_TECHNIQUE_TYPE = "SET_TECHNIQUE_TYPE";
export function setTechniqieType(techniqueType) {
	return {
		type: SET_TECHNIQUE_TYPE,
		techniqueType
	};
}