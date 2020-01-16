import React from 'react';
import { connect } from 'react-redux';

import { removeFromCart } from '../../actions/cartActions';

import './styles.scss';
import trashcan from '../../assets/trash-can.svg';

function Cart(props) {
	/**
	 *	props.cart is populated through the redux store mapStateToProps
	 *	props.removeItem is populated through mapDispatchToProps
	 */
	const { cart, removeItem } = props;

	return (
		<main className="order-details">
			<table className="order-details__table">
				<thead>
					<tr>
						<th></th>
						<th>Product</th>
						<th>Unit Price</th>
						<th>Quantity</th>
						<th>Total Price</th>
						<th></th>
					</tr>
				</thead>

				<tbody>
					{cart.map(item => (
						<tr key={item.id}>
							<td>
								<img
									className="order-details__photo"
									src={item.image}
									alt={item.title}
								/>
							</td>
							<td className="order-details__productname">{item.title}</td>
							<td>
								<strong>{item.formattedPrice}</strong>
							</td>
							<td>
								<button className="order-details__change-qty">-</button>
								<label className="screen-reader-only" htmlFor="productqty">
									Quantity
								</label>
								<input
									className="order-details__qty"
									id="productqty"
									type="number"
								/>
								<button className="order-details__change-qty">+</button>
							</td>
							<td>
								<strong>€899,70</strong>
							</td>
							<td>
								<button
									onClick={() => removeItem(item)}
									className="order-details__delete"
								>
									<img src={trashcan} alt="Trash Can" />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<div className="order-details__details">
				<button className="order-details__checkout-btn">Checkout</button>
				<div className="order-details__total">
					<span>Total:</span>
					<strong>€2699.1</strong>
				</div>
			</div>
		</main>
	);
}

const mapStateToProps = state => ({
	cart: state.cart,
});

const mapDispatchToProps = dispatch => {
	return {
		removeItem: item => dispatch(removeFromCart(item)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
