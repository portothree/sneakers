import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions';

import api from '../../services/api';
import { formatCurrency } from '../../helpers/intl';

import './style.scss';

class Catalog extends Component {
	state = {
		items: [],
	};

	async componentDidMount() {
		const response = await api.get('items');

		const data = response.data.map(item => ({
			...item,
			formattedPrice: formatCurrency.format(item.price),
		}));

		this.setState({ items: data });
	}

	handleAddToCart = item => {
		this.props.dispatch(addToCart(item));
	};

	render() {
		/**
		 * this.props.items is populated through the redux store and mapStateToProps
		 */
		const { items } = this.state;

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
								onClick={() => this.handleAddToCart(item)}
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
}

export default connect()(Catalog);
