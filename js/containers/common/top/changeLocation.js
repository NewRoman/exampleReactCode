import React, {Component, PropTypes} from 'react'

import Helpers from '../../../startup/appHelpers'

{/* компонент - регистрация,авторизация,профиль пользователя */}
// import LoginHeader from '../../components/common/top/loginHeader'

{/* компонент - cписок стран */}
import CountryLocalization from '../../../components/common/top/userLocalization/сountryLocalization'

{/* компонент - cписок языков */}
import LanguageLocalization from '../../../components/common/top/userLocalization/languageLocalization'

{/* компонент - cписок валют */}
import CurrencyLocalization from '../../../components/common/top/userLocalization/сurrencyLocalization'


{/* компонент - cписок ед измерения */}
import MeasureLocalization from '../../../components/common/top/userLocalization/measureLocalization'

class ChangeLocation extends Component {
	constructor(props) {
        super(props);
	}

	componentDidMount() {
		// тут посылаем запрос на получение данных для записи их в store.header
		// this.props.fetchHeaderData();
		// console.log('locale',$('html').attr('locale'))
		// подключить функционал для настроек локализации
		if ($('html').attr('data-locale') !== 'treto') {
			var localization = new UserLocalization();
			localization.init();
		}
	}

	render() {
		// this.props.top.countryList[this.props.top.userCountryWas]
		let propsTop = this.props.top;
		let trans = this.props.trans;
		let dataSaveAction = '/localization';
		// по класу js-change-location определяем запускать или нет функционал для смены настроек локализации
		return (
			<div className="change-location js-change-location" data-bg={propsTop.showLocale ? 1 : 0 }>

				{/* блок редактирования данных местоположения */}
				<div className="edit-location">
					<div className="edit-form">
						<form action="" method="post">

							{/* country  */}
							<CountryLocalization 
									countryList={ propsTop.countryList }
									transHeaderCountry = { trans.header_country }
									transLocalCountryPopular = { trans.local_country_popular }
									transLocalCountryAll = { trans.local_country_all }
									userCountryWas = { propsTop.userCountryWas }
							/>

							{/* language  */}
							<LanguageLocalization 
									selectLocales={ propsTop.selectLocales }
									transLeftMenuAll = { trans.left_menu_all }
									transHeaderLanguage = { trans.header_language }
									userLocaleWas = { propsTop.userLocaleWas }
							/>

							{/* currency  */}
							<CurrencyLocalization 
									currencyList={ propsTop.currencyList }
									transHeaderCurrency = { trans.header_currency }
									// transHeaderLanguage = { trans.header_language }
									// userLocaleWas = { propsTop.userLocaleWas }
									userCurrencyWas = { propsTop.userCurrencyWas }
							/>

							{/* measure  */}
							<MeasureLocalization 
									measureList={ propsTop.measureList }
									transHeaderMeasure = { trans.header_measure }
									// transHeaderLanguage = { trans.header_language }
									// userLocaleWas = { propsTop.userLocaleWas }
									userCountryWas = { propsTop.userCountryWas }
							/>
						</form>
					</div>

					 <div className="button-panel">
						<button id="save-localization" className="js-save-localization save" data-url={ dataSaveAction }>
							{ trans.yes }
						</button>
						<button className="cancel js-close-location-block close-location-block">
							{ trans.cancel }
						</button>
					</div>
				</div>
			</div>
		)
	}
}
 
ChangeLocation.displayName = 'components/discuss/changeLocation';

export default ChangeLocation