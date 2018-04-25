{/* просмотренные пользователем страницы */}

import React from 'react'

import Helpers from '../../../../startup/appHelpers'
 
const CountryLocalization = (props) => { 

	let transHeaderCountry = props.transHeaderCountry;
	let transLocalCountryPopular = props.transLocalCountryPopular;
	let transLocalCountryAll = props.transLocalCountryAll;
	

	let basicCountryList = Helpers.mapObject(props.countryList, function(index, item) {
		{/* console.log("index == 'fi'",index == 'fi') */}
		{/* or key == 'en' пункт Rest of the World поместить в список основных стран key == 'en' */}
		{/* добавление класа js-popular-country - это ХАК для того  чтобы при фильтрации списки по введеному тексту не дублировались страны в фильтрованом списке */}
		let activeClass = props.userCountryWas == index ? 'simple-list-item active js-default-option js-popular-country' : 'simple-list-item js-popular-country' ;
		let countryFlagClass = 'thumb flag flag-' + index; 
		if (index == 'fi' || index == 'fr' || index == 'de' || index == 'it' || index == 'nl' || index == 'gb' || index == 'us') return (
			<li key={index}
				className={ activeClass } 
				data-prior-lang={ item['locales'] ? item['locales'] : 'en' }
				data-simpledrop-value={ index }
				data-simpledrop-text={ item['name'] }
			>
				 {/* если надо будет возле названия выбраной страны показывать ее флаг то надо будет раскоментировать этот атрибут data-simpledrop-thumb */}
				<span className={ countryFlagClass }>
					{/* тут должна быть картинка но в данном случае картинка задаеться стилями как бекграунд */}
				</span>
				{ item.name }
			</li>
		)}	
	);

	let allCountryList =  Helpers.mapObject(props.countryList, function(index, item) {
		{/* or key == 'en' пункт Rest of the World поместить в список основных стран key == 'en' */}
		{/* добавление класа js-popular-country - это ХАК для того  чтобы при фильтрации списки по введеному тексту не дублировались страны в фильтрованом списке */}
		let activeClass = props.userCountryWas == index ? 'simple-list-item active' : 'simple-list-item' ;
		let countryFlagClass = 'thumb flag flag-' + index; 
		// элемент который будет показан если при поиске не было найдено ни одного совпадения если index == 'en'
		if (index == 'en' ) {
			return (
				<li key={index}
					className={ activeClass } 
					data-no-match-found
					data-prior-lang={ item['locales'] ? item['locales'] : 'en' }
					data-simpledrop-value={ index }
					data-simpledrop-text={ item['name'] }
				>
					 {/* если надо будет возле названия выбраной страны показывать ее флаг то надо будет раскоментировать этот атрибут data-simpledrop-thumb */}
					<span className={ countryFlagClass }>
						{/* тут должна быть картинка но в данном случае картинка задаеться стилями как бекграунд */}
					</span>&nbsp;
					{ item.name }
				</li>
			)
		} else {
			return (
				<li key={index}
					className={ activeClass } 
					data-prior-lang={ item['locales'] ? item['locales'] : 'en' }
					data-simpledrop-value={ index }
					data-simpledrop-text={ item['name'] }
				>
					 {/* если надо будет возле названия выбраной страны показывать ее флаг то надо будет раскоментировать этот атрибут data-simpledrop-thumb */}
					<span className={ countryFlagClass }>
						{/* тут должна быть картинка но в данном случае картинка задаеться стилями как бекграунд */}
					</span>&nbsp;
					{ item.name }
				</li>
			)
		}
	}) 
	
    return (
		<div className="field">
			<label htmlFor="country" className="label">{ transHeaderCountry }</label>
			<br/>

			<div className="simple-list-drop-container country-block">
				<div className="list-drop-active" role="show-list-drop">
					<input type="text" className="active-status" placeholder=""/>
				</div>

				<ul className="simple-list-drop js-simple-list-drop">
					<li className="group-name">{ transLocalCountryPopular }</li>

					{/* если newcountry.key != 'en' */}
					{ basicCountryList }

					<li className="divider"></li>

					{/* кнопка показать все страны  */}
					<li className="group-name" > { transLocalCountryAll }</li>

					{ allCountryList }
					
				</ul>
			</div>

		</div>
    );
};

CountryLocalization.displayName = 'components/discuss/countryLocalization';

export default CountryLocalization