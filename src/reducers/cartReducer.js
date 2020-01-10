import produce from 'immer';

import initialState from './initialState';

export default function cart(state = initialState.cart, action) {
	switch (action.type) {
		case 'ADD_TO_CART':
			return produce(state, draft => {
				const itemIndex = draft.findIndex(item => item.id === action.item.id);

				if (itemIndex >= 0) {
					draft[itemIndex].qty++;
				} else {
					draft.push({ ...action.item, qty: 1 });
				}
			});

		default:
			return state;
	}
}
