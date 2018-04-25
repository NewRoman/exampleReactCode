{/* просмотренные пользователем страницы */}

import React from 'react'

import Helpers from '../../../../startup/appHelpers'

const LanguageLocalization = (props) => {

	let transLeftMenuAll = props.transLeftMenuAll;
	let transHeaderLanguage = props.transHeaderLanguage;


	let languagesPriorityList = Helpers.mapObject(props.selectLocales, function(index, item) {
				
		return (
			<li key={index}
				className={ props.userLocaleWas == item.code ? "simple-list-item js-prior-lang-item prior-lang-item active" : "simple-list-item js-prior-lang-item prior-lang-item" } 
				data-lang={ item.code }
				data-simpledrop-value={ item.uri } 
				data-simpledrop-text={ item.name }
			>
				{ item.name }
			</li>
		)
		
	});

	let languagesOtherList = Helpers.mapObject(props.selectLocales, function(index, item) {
				
		return (
			<li key={index + '1'}
				className="simple-list-item js-second-item second-lang-item" 
				data-lang={ item.code }
				data-simpledrop-value={ item.uri } 
				data-simpledrop-text={ item.name }
			>
				{ item.name }
			</li>
		)
		
	});

    return (
		<div className="field">

			<label htmlFor="lang" className="label">{ transHeaderLanguage } </label>
			<br/>
			<div className="simple-list-drop-container language-block" data-sel-lang={ props.userLocaleWas }>
				<div className="list-drop-active" role="show-list-drop">
					<input type="text" className="active-status" />
				</div> 

				<ul className="simple-list-drop js-simple-list-drop">
					{/* тут показываем скриптом только приоритетные языки для каждой страны и английский для всех стран */}
					{ languagesPriorityList }
					
					<li className="divider"></li>

					{ languagesOtherList }
					<li 
						className="" 
						role="show-all-items"
					>
						{ transLeftMenuAll }
					</li>
				</ul>
			</div>
		</div>
    );
};

LanguageLocalization.displayName = 'components/discuss/languageLocalization';

export default LanguageLocalization