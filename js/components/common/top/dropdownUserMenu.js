import React from 'react'


const DropdownUserMenu = (props) => {

	let trans = props.trans;
	let user = props.user;

	// меню профиля пользователя
    return (
		<div className="collapse dropdown-user-menu" id="collapseRegTop">
			<ul className=" menuRegMobile" >
				
				{!!user.name ? (
					<li>
						<a href={user.profile} target="_blank" rel="noopener">{ trans.left_menu_profile }</a>
					</li>
				) : (
					<li>
						<a className="login reg-menu-title" href={user.login}>{ trans.header_login }</a>
					</li>
				)}

				{!!!user.name && (
					<li className="payment-item">

						<a className="register reg-menu-title"
						href={user.reg}>{ trans.header_registration }</a>

					</li>
				) }

				<li className="location-item js-location-item">
					<a href="javascript:void(0)">
					{/* simple-tab необходим для коректной отработки плагина _simple-tab.js */}
						<div className="simple-tab">
							<div className="wrap-title-change-location tab-title" data-tab-id="#lang_tab">
								<span className="title-name" data-loc-status-block>
									{ props.userCountry != 'en' ? <span className="flag flag-{userCountry}"></span> : <span className="flag rest-world"></span> }

									{ !!props.isInCountryList && <span className='name-alias checked tooltip-help'
										title="{{ countryList[userCountry()]['name'] }}">
										{ props.isInCountryList }
									</span> }
								</span>
							</div>
						</div>
					</a>
				</li>

				{ !!user.name && (
					<li className="logout">
						<a className="logout reg-menu-title"  href={user.logout}>{ trans.header_logot }</a>
					</li>
				)}
				
			</ul>
		</div>
    );
};

DropdownUserMenu.displayName = 'components/discuss/dropdownUserMenu';

export default DropdownUserMenu