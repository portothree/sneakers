import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions';

import api from '../../services/api';
import { formatCurrency } from '../../helpers/intl';

import './style.scss';

function Catalog(props) {
	const [items, setItems] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await api.get('items');

			const data = response.data.map(item => ({
				...item,
				formattedPrice: formatCurrency(item.price, 'pt-PT', 'EUR'),
			}));

			setItems(data);
		}

		fetchData();
	}, []);

	/**
	 * props.addToCart is populated through mapDispathToProps
	 */
	const { addToCart } = props;

	return (
		<main className="catalog">
			<h1 className="catalog__title">Catalog</h1>
			<div className="catalog__items">
				{items.map(item => (
					<div key={item.id} className="item">
						<img className="item__photo" src={item.image} alt={item.title} />
						<strong className="item__vendor">{item.vendor}</strong>
						<h2 className="item__title">{item.title}</h2>
						<span className="item__price">{item.formattedPrice}</span>

						<button
							className="item__button"
							type="button"
							onClick={() => addToCart(item)}
						>
							<span className="item__qty">1</span>
							<span className="item__action">Add to cart</span>
						</button>
					</div>
				))}
			</div>
		</main>
	);
}

const mapDispathToProps = dispatch => {
	return {
		addToCart: item => dispatch(addToCart(item)),
	};
};

export default connect(null, mapDispathToProps)(Catalog);
