import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Catalog from './pages/Catalog';
import Cart from './pages/Cart';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Catalog} />
			<Route path="/" component={Cart} />
		</Switch>
	);
}
