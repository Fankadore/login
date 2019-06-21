import React, { useReducer } from 'react';
import './AuthForm.scss';

import AuthReducer from '../../state/AuthReducer';

function AuthForm(props) {
	const [state, dispatch] = useReducer(AuthReducer, {
		currentView: 'Sign In',
		username: '',
		password: '',
		email: '',
	});

	const handleCurrentView = (e) => {
		if (e.target.name === state.currentView) return;
		
		dispatch({ type: 'CHANGE_VIEW', value: e.target.name });
		
		const tabs = document.getElementsByClassName('auth-form__tab');
		Array.from(tabs).forEach(tab => {
			if (tab.name === e.target.name) tab.classList.add('auth-form__tab--active');
			else tab.classList.remove('auth-form__tab--active');
		});
	};
	const handleUsername = (e) => dispatch({ type: 'FIELD', field: 'username', value: e.target.value });
	const handleEmail = (e) => dispatch({ type: 'FIELD', field: 'email', value: e.target.value });
	const handlePassword = (e) => dispatch({ type: 'FIELD', field: 'password', value: e.target.value });
	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (state.currentView === "Sign In") {
			dispatch({ type: 'SIGN_IN' });
			console.log("Sign In Form Submitted");
		}
		else if (state.currentView === "Sign Up") {
			dispatch({ type: 'SIGN_UP' });
			console.log("Sign Up Form Submitted");
		}
		else {
			dispatch({ type: 'ERROR', value: `Something went wrong. Current View: ${state.currentView}`});
		}
	};

	if (!state.currentView) return null;
	
	return (
		<form className="auth-form" onSubmit={handleSubmit}>
			<button onClick={handleCurrentView} type="button" name="Sign In" className="auth-form__tab auth-form__tab--sign-in auth-form__tab--active">Sign In</button>
			<button onClick={handleCurrentView} type="button" name="Sign Up" className="auth-form__tab auth-form__tab--sign-up">Sign Up</button>
			<div className="auth-form__fields">
				<input className="auth-form__input auth-form__username" type="text" placeholder="Username" value={state.username} onChange={handleUsername} />
				{(state.currentView === "Sign Up") && <input className="auth-form__input auth-form__email" type="text" placeholder="Email" value={state.email} onChange={handleEmail} />}
				<input className="auth-form__input auth-form__password" type="password" placeholder="Password" value={state.password} onChange={handlePassword} />
				<button className="auth-form__submit" type="submit">{state.currentView}</button>
			</div>
		</form>
	);
}

export default AuthForm;
