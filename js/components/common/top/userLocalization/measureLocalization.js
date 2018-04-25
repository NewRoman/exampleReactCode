{/* валюта */}

import React from 'react'

import Helpers from '../../../../startup/appHelpers'
 
const MeasureLocalization = (props) => { 

	let transHeaderMeasure = props.transHeaderMeasure;
	// let transLocalCountryPopular = props.transLocalCountryPopular;
	// let transLocalCountryAll = props.transLocalCountryAll;
	

	let measureList = Helpers.mapObject(props.measureList, function(index, item) {
				
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

	let disableClass = props.measureList.length == 1 ? 'disabled list-drop-active ' : 'list-drop-active';

    return (
		<div className="field js-measure-box" id="measure-box" style={{ display: props.userCountryWas == 'us' || props.userCountryWas == 'ca' ? 'block' : 'none' }} >
			<label htmlFor="measure" className="label">{ transHeaderMeasure }</label>
			<br/>

			<div className="simple-list-drop-container measure-block">

				<div className="list-drop-active" role="show-list-drop">
					<input type="text" className="active-status" />
				</div> 

				<ul className="simple-list-drop " id="">
					{ measureList }
				</ul>
			</div>
		</div>
    );
};

MeasureLocalization.displayName = 'components/discuss/measureLocalization';

export default MeasureLocalization