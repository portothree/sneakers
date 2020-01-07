import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.scss';

import logo from '../../assets/logo.svg';
import cart from '../../assets/cart.svg';

function Header(props) {
	return (
		<header className="header">
			<Link to="/" className="header__logo">
				<img src={logo} alt="Sneakers logo" />
			</Link>

			<Link to="/cart" className="header__cart">
				<strong>My cart</strong>
				<span className="header__cart-amount">
					{props.cart.length} <span className="screen-reader-only">items</span>
				</span>
				<img
					aria-hidden="true"
					className="header__cart-logo"
					src={cart}
					alt="Cart icon"
				/>
			</Link>
		</header>
	);
}

export default connect(state => ({
	cart: state.cart,
}))(Header);
