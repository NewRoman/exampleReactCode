import React from 'react'
// import Helpers from '../../startup/appHelpers'
// import FirstMessage from './firstMessage';

const CommonSearchSphinx = (props) => {
	const state = props.state;
	let suggesterListStyle = state.searchResultGot == false ? {
		'display': 'none'
	} : {
		'display': 'block'
	};
    return ( 
		<div className="sphinx-search-block js-sphinx-search">
			<span className="sphinx-search-close">
				<span className="hidden-xs material-icons">&#xE5CD;</span>
				<span className="visible-xs">'buyOrder.list.cancel' }</span>
			</span>
			<div className="sphinx-input-wrapper">
				<label id="SearchOfSphinxButton" htmlFor="SearchOfSphinxInput" className="sphinx-input-label hidden-xs material-icons">&#xE8B6;</label>
				<input 
					id="SearchOfSphinxInput"
					type="text" 
					className='sphinx-input js-sphinx-input'
					data-url={ props.dataUrl }
					data-action={ props.dataAction }
					placeholder="{ left_menu_find }"
					data-value-empty="{ 'left_menu_find' }"
					data-alert-message="{ 'search_sphinx_alert' }" 
					onKeyUp={ props.handleKeyUp }
					onKeyDown={ props.handleKeyDown }
					/> 
				
				<span onClick={props.sphinxInputClear} className={ state.clearedSearchInput ? 'hidden' : 'sphinx-input-clear material-icons' }>&#xE5CD;</span>
				
				<span className="sphinx-submit-button js-submit-button"
					onClick={props.submitSearch}
				>

					<span className="hidden-xs">{ 'site_search_btn' }</span>
					<span className="visible-xs material-icons">&#xE8B6;</span>
				</span>
			</div>
			<div className="s-r-suggester-wrapper" 
				 style={ suggesterListStyle }
			>
			
				<div id='suggesterList' 
					 className="s-r-suggester-list" 
					 dangerouslySetInnerHTML={{ __html: state.searchResultGot == false ? '<i></i>' : state.searchResultGot}}
					 onClick={ props.searchItemClick }
				>
					
				</div>
				<div className="s-r-more-link-wrapper">
				<span className="s-r-more-link js-submit-button" onClick={props.submitSearch} > 
				 'all_search_results' 
				 </span>
				</div>
			</div>
		</div>
    )
};

CommonSearchSphinx.displayName = 'components/commonSearchSphinx';

export default CommonSearchSphinx