import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
const REMOVE_ALL_FAVORITE = "REMOVE_ALL_FAVORITE";

const initialState = {
	favourite: {
		list: [],
	},
};

const mainReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case ADD_FAVORITE:
			return {
				...state,
				favourite: {
					...state.favourite,
					list: [...state.favourite.list, actions.payload],
				},
			};
		case REMOVE_FAVOURITE:
			return {
				...state,
				favourite: {
					...state.favourite,
					list: state.favourite.list.filter((fav) => fav !== actions.payload),
				},
			};
		case REMOVE_ALL_FAVORITE:
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
