import React from 'react';

import './styles.scss';
import productPhoto from '../../assets/beluga.jpg';
import trashcan from '../../assets/trash-can.svg';

export default function Cart() {
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
					<tr>
						<td>
							<img
								className="order-details__photo"
								src={productPhoto}
								alt="Gray sneaker"
							/>
						</td>
						<td className="order-details__productname">
							Yeezy Boost 350 V2 Beluga 2.0
						</td>
						<td>
							<strong>€299,90</strong>
						</td>
						<td>
							<label className="screen-reader-only" htmlFor="productqty">
								Quantity
							</label>
							<input
								className="order-details__qty"
								id="productqty"
								type="number"
								value="3"
							/>
						</td>
						<td>
							<strong>€899,70</strong>
						</td>
						<td>
							<button className="order-details__delete">
								<img src={trashcan} alt="Trash Can" />
							</button>
						</td>
					</tr>
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
