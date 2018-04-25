{/* валюта */}

import React from 'react'

import Helpers from '../../../../startup/appHelpers'
 
const CurrencyLocalization = (props) => { 

	let transHeaderCurrency = props.transHeaderCurrency;
	// let transLocalCountryPopular = props.transLocalCountryPopular;
	// let transLocalCountryAll = props.transLocalCountryAll;
	

	let currencyList = Helpers.mapObject(props.currencyList, function(index, item) {
				
		let activeClass = props.userCurrencyWas == item ? 'simple-list-item active js-default-option' : 'simple-list-item' ;

		return (
			<li key={index}
				className={ activeClass }
				data-simpledrop-value={ item }
				data-simpledrop-text={ item }
			>
				{ item }
			</li>
		)}	
	);

	let disableClass = props.currencyList.length == 1 ? 'disabled list-drop-active ' : 'list-drop-active';

    return (
		<div className="field">
			<label htmlFor="currency" className="label">{ transHeaderCurrency }</label>
			<br/>
			<div className="simple-list-drop-container currency-block">
				
				<div className={ disableClass } role="show-list-drop">
					<input type="text" className="active-status" />
				</div> 

				<ul className="simple-list-drop ">
					{ currencyList }
				</ul>
			</div>
		</div>
    );
};

CurrencyLocalization.displayName = 'components/discuss/currencyLocalization';

export default CurrencyLocalization