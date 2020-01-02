import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/normalize.css';
import './styles/global.css';
import Header from './components/Header';

import Routes from './routes';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes />
		</BrowserRouter>
	);
}

export default App;
