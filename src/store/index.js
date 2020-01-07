import { createStore, combineReducers } from 'redux';

const initialState = [];

function cart(state = initialState, action) {
	switch (action.type) {
		case 'ADD_TO_CART':
			return [...state, action.product];

		default:
			return state;
	}
}

const rootReducer = combineReducers({
	cart,
});

const store = createStore(rootReducer);

export default store;
