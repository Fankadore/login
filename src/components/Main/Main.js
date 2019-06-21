import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Main.scss';

import AuthForm from '../AuthForm/AuthForm';

function Main(props) {
	return (
		<main className="main">
			<Router>
				<Route exact path="/" render={() => <AuthForm />} />
			</Router>
		</main>
	);
}

export default Main;
