/**
 * @param {Object} item
 * @return {Object} action
 */
export function addToCart(item) {
	return {
		type: 'ADD_TO_CART',
		item,
	};
}

/**
 * @param  {Object} item
 * @return {Object} action
 */
export function removeFromCart(item) {
	return {
		type: 'REMOVE_FROM_CART',
		id: item.id,
	};
}
