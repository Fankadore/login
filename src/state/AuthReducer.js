const AuthReducer = (state, action) => {
  switch (action.type) {
		case 'FIELD':
			return {
				...state,
				[action.field]: action.value,
			};
		case 'SIGN_IN':
			return {
				...state,
				isSignedIn: true,
				currentView: 'Select Character',
			};
		case 'SIGN_OUT':
			return {
				...state,
				isSignedIn: false,
				currentView: 'Sign In',
				username: '',
				email: '',
				password: '',
			};
		case 'SIGN_UP':
			return {
				...state,
			};
		case 'CHANGE_VIEW':
			return {
				...state,
				currentView: action.value,
			};
    default:
      throw new Error(action.value);
  }
};

export default AuthReducer;
