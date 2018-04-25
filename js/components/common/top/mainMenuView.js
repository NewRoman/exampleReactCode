import React from 'react'


const MainMenu = (props) => {

	let trans = props.trans;

	// урлы и текст ссылок в главном меню
	let links = props.links;

	let arrowRight = '';
	let companyOrAboutUs = links['about'].name;

//  для мобильных в меню AboutUs из левого меню(бургер) совсем спрятать елемент more-opt 
	if ( props.hiddenClass == '' ) {
		let companyOrAboutUs = trans.footer_company
		let arrowRight = <i className="material-icons pull-right">&#xE315;</i>;
	}

	let menuClasses = props.topClasses != '' ? 'menu top-dropdown-links js-main-menu  ' + props.topClasses : 'menu top-dropdown-links js-main-menu';

	let menuClassWithHidden = props.hiddenClass != '' ? 'more-opt js-drop-menu-items ' + props.hiddenClass : 'more-opt js-drop-menu-items';

    return (

		<ul className={ menuClasses }>

			<li className="about-us-li" data-cls=".ul-about-us">
				<a href={ links['about'].url } >
					{ companyOrAboutUs }
					{ arrowRight }
				</a>
			</li>
			<li className="payment-li" data-cls=".ul-payment">
				<a className="payment" href={ links['payment'].url }>
					{ links['payment'].name }
					<span className="sprite-paypal-verified"></span>
					{ arrowRight }
				</a>
			</li>
			<li className="faq-li" data-cls=".ul-faq">
				<a href={ links['faq'].url }>
					{ links['faq'].name }
					{ arrowRight }
				</a>
			</li>
			<li className="contacts-li" data-cls=".ul-contacts">
				<a href={ links['contacts'].url } >
					{ links['contacts'].name }
					{ arrowRight }
				</a>
			</li>


			<li className={ menuClassWithHidden } onClick={ props.showHiddenItems }>
				<i className="material-icons">&#xE5D4;</i>

				<ul className="more-items js-hide-toggle ">
					<li className="ul-about-us hide">
						<a href={ links['about'].url } >
							{ links['about'].name }
						</a>
					</li>
					<li className="ul-payment hide">
						<a className="payment" href={ links['payment'].url } >
							{ links['payment'].name }
						</a>
					</li>
					<li className="ul-faq hide ">
						<a href={ links['faq'].url } >
							{ links['faq'].name }
						</a>
					</li>
					<li className="ul-contacts hide">
						<a href={ links['contacts'].url }>
							{ links['contacts'].name }
						</a>
					</li>
				</ul>
			</li>
		</ul>

    );
};

MainMenu.displayName = 'components/discuss/mainMenu';

export default MainMenu