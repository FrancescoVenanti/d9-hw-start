const initialState = {
	favourite: {
		list: [],
	},
};

const mainReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case "ADD_FAVORITE":
			return {
				...state,
				favourite: {
					...state.favourite,
					list: [...state.favourite.list, actions.payload],
				},
			};
		case "REMOVE_FAVOURITE":
			return {
				favourite: {
					list: [],
				},
			};
		default:
			return state;
	}
};
export default mainReducer;
