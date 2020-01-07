import initialState from './initialState';

export default function cart(state = initialState.cart, action) {
	switch (action.type) {
		case 'ADD_TO_CART':
			return [...state, { ...action.item, qty: 1 }];

		default:
			return state;
	}
}
