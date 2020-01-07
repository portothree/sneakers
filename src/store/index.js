import { createStore, combineReducers } from 'redux';
import Reactotron from '../cfg/ReactotronCfg';

const enhancer =
	process.env.NODE_ENV === 'development' ? Reactotron.createEnhancer() : null;

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

const store = createStore(rootReducer, enhancer);

export default store;
