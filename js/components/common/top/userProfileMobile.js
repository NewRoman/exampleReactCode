import React from 'react'

// выпадающее меню пользователя
import DropdownUserMenu from '../../../components/common/top/dropdownUserMenu'

const UserProfile = (props) => {

	let trans = props.trans;

	{/* элемент виден на мобильных устройствах */}
    return (
		<li className="setting-item user-menu-item-mobile user-menu-item">
			{/* кнопка с иконкой профиля с выпадающим списком collapseRegTop */}
			<a className="navbar-toggle-reg collapsed m-l-n" role="button"
			data-toggle="collapse" href="#collapseRegTop" aria-expanded="false"
			>
				{ !!!props.user.name ? <i className="material-icons">&#xE8A6;</i> : <i className="material-icons">&#xE851;</i> }

			</a>
			
			{/* выпадающее меню пользователя (ссылка на профиль и логаут), или ссылок на регистрацию / авторизацию (при клике на иконку профиля href="#collapseRegTop") иконка видна, когда не помещается имя пользователя */}
			<DropdownUserMenu 
				user={ props.user }
				trans={ props.trans }
				userCountry={ props.userCountry }
				isInCountryList={ props.isInCountryList }
			/>
		</li>
    );
};

UserProfile.displayName = 'components/discuss/userProfile';

export default UserProfile