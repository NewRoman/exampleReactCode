import React from 'react'

import Helpers from '../../../startup/appHelpers'

import UserProfile from './userProfile'


const LoginHeader = (props) => {
	let loginHref = props.user.login;
	let registerHref = props.user.reg;
	let trans = props.trans; 

	return  props.user.name !== null ? (
			<UserProfile user={props.user} trans={ trans } />
		) : (
			// ссылки регистрации / авторизации
			<div className="wrap-login-links">
				<a className="login" href={ loginHref }>{ trans.header_login }</a>
				<a className="register"	href={ registerHref }>{ trans.header_registration }</a>
			</div>
		) 
}
 
LoginHeader.displayName = 'components/discuss/loginHeader';

export default LoginHeader