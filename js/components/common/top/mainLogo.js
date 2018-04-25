import React from 'react'


const MainLogo = (props) => {

	let trans = props.trans;
 
    return (
		<div className="logo-box pull-left js-sibling-main-menu">
			<span className="toggle-menu" data-toggle="offcanvas" data-target="#sidebar-nav" onClick={ props.showToggleMobileMenu }>
				<i className="material-icons">&#xE5D2;</i>
			</span>

			<a className="logo-img" href={ props.homeUrl } title={ trans.home_page }></a>
			<span className="slogan-block">{trans.left_menu_slogan}</span>
		</div>
    );
};

MainLogo.displayName = 'components/discuss/mainLogo';

export default MainLogo