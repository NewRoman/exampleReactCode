import React, {Component, PropTypes} from 'react'

import Helpers from '../../../startup/appHelpers'

class UserProfile extends Component {
	constructor(props) {
		super(props);
		this.logoutHref = this.props.user.logout;
		this.logOut = this.logOut.bind(this);
	}

	logOut() {
		window.location.href = this.logoutHref;
	}

	render() {
		let trans = this.props.trans;

		return (
			<div className="profile-panel" data-username={ this.props.user.name }
				data-email="{{ user.email }}">
			
			<ul className="profile-options">
				<li className="user-profile-edit">
					<a href={ this.props.user.profile }>
						<i className="material-icons">&#xE254;</i>
						{ trans.left_menu_profile_edit }
					</a>
				</li>
				<li className="user-sign-out">
					<a  onClick={ this.logOut }>
						<i className="material-icons">&#xE879;</i>
						{ trans.header_logot }
					</a>
				</li>
			</ul>
		
		</div>
		)
	}
}
 
UserProfile.displayName = 'components/discuss/userProfile';

export default UserProfile