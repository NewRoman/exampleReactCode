import React, {Component, PropTypes} from 'react'
// import {connect} from 'react-redux'
// import { bindActionCreators } from 'redux'
import Helpers from '../../../startup/appHelpers'

{/* компонент - регистрация,авторизация,профиль пользователя */}
import LoginHeader from '../../../components/common/top/loginHeader'

{/* контейнер - регистрация,авторизация,профиль пользователя */}
import ChangeLocation from './changeLocation'


class SimpleTabs extends Component {
	constructor(props) {
        super(props);
	}

	componentDidMount() {
		// тут посылаем запрос на получение данных для записи их в store.header
		// this.props.fetchHeaderData();
	}

	render() {
		// this.props.top.countryList[this.props.top.userCountryWas]
		let trans = this.props.trans;
		let countryFlagClass = 'flag flag-' + Helpers.country();
		
		return (
			<div className="simple-tab">
				<div className="list-tabs">
					<div className="wrap-user-name tab-title" data-tab-id="#login_tab" role="show-tab-content">
						{ this.props.top.user.name !== null ? (
							<span className="user-name title-name">
								<span className='name-alias'>{ this.props.top.user.name }</span>
								<span className="user-icon"><i className="material-icons">&#xE851;</i></span>
							</span>
							) : (
							<span className="user-name title-name">
								<span className='name-alias'>{ trans.user_profile_account }</span>
								<span className="user-icon"><i className="material-icons">&#xE8A6;</i></span>
							</span>
							) }
						<div className="dividing-line hidden"></div>
					</div>

					{/* смена локации - отображение флага и названия страны */}
					<div className="wrap-title-change-location js-wrap-title-change-location tab-title" data-tab-id="#lang_tab" role="show-tab-content">
						<span className="title-name" data-loc-status-block>
							{ Helpers.country() !== 'en' ? (
								<span className={ countryFlagClass }></span>
							) : (
								<span className="flag rest-world"></span>
							) }

							{ this.props.top.countryList[Helpers.country()] && (
								<span className='name-alias'>
									{ this.props.top.countryList[Helpers.country()]['name'] }
								</span>
							) }
						</span>
					</div>
				</div>

				<div className="content-tabs">
					<div className="tab-block wrap-profile-block" id="login_tab" data-tab-content>
						{/* регистрация,авторизация,профиль пользователя */}
						<LoginHeader 
								user={this.props.top.user}
								trans={trans}
						/>
					</div>
					{/* смена локации - блок с полями */}
					<div className="tab-block wrap-change-location" id="lang_tab" data-tab-content>
						<ChangeLocation 
								top={this.props.top}
								trans={trans}
						/>
						{/* невидимый блок, который увеличивает высоту родителя, чтобы при выборе страны или языка из выпадающих списков курсор не попадал на .backdrop-tab (добавляется в _simple-tab.js), и тем самым не закрывал табы */}
						<div className="pseudo-height"></div>
					</div>
				</div>
			</div>
		)
	}
}
 
SimpleTabs.displayName = 'components/discuss/simpleTabs';

export default SimpleTabs