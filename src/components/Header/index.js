import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import logo from '../../assets/logo.svg';
import cart from '../../assets/cart.svg';

export default function Header() {
	return (
		<header className="header">
			<Link to="/">
				<img src={logo} alt="Sneakers logo" />
			</Link>

			<div className="header__cart">
				<div className="header__cart-info">
					<strong>My cart</strong>
					<span>3 items</span>
				</div>
				<img className="header__cart-logo" src={cart} alt="Cart icon" />
			</div>
		</header>
	);
}
