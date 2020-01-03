import React from 'react';

import productPhoto from '../../assets/beluga.jpg';

import './style.scss';

export default function Catalog() {
	return (
		<main className="catalog">
			<h1 className="catalog__title">Catalog</h1>
			<div className="catalog__items">
				<div className="item">
					<img className="item__photo" src={productPhoto} alt="Gray sneaker" />
					<strong className="item__vendor">Adidas</strong>
					<h2 className="item__title">Yeezy Boost 350 V2 Beluga 2.0</h2>
					<span className="item__price">€299,90</span>

					<button className="item__button" type="button">
						<span className="item__qty">1</span>
						<span className="item__action">Add to cart</span>
					</button>
				</div>
				<div className="item">
					<img className="item__photo" src={productPhoto} alt="Gray sneaker" />
					<strong className="item__vendor">Adidas</strong>
					<h2 className="item__title">Yeezy Boost 350 V2 Beluga 2.0</h2>
					<span className="item__price">€299,90</span>

					<button className="item__button" type="button">
						<span className="item__qty">1</span>
						<span className="item__action">Add to cart</span>
					</button>
				</div>
			</div>
		</main>
	);
}
