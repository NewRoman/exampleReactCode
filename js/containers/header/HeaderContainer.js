import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import Helpers from '../../startup/appHelpers'

{/* лого и бургер для вызова бокового меню */}
import MainLogo from '../../components/common/top/mainLogo'
{/* главное меню сайта */}
import MainMenu from '../common/top/mainMenu'
{/* контейнер для элементов при наведении на которые будет показыаться выпадающий список */}
import HoveredListItems from '../common/top/hoveredListItems'

{/* контейнер для элементов при наведении на которые будет показыаться выпадающий список */}
import SimpleTabs from '../common/top/simpleTabs'

class HeaderContainer extends Component {
	constructor(props) {
		super(props);

		this.showToggleMobileMenu = this.showToggleMobileMenu.bind(this);
	}

	componentDidMount() {
		
	}

	// открывание/закрывание бокового меню  с фильтрами
	showToggleMobileMenu(e) {
		let $ = window.$;
		let $sidebar_offcanvas = $('.wrap-filters-block'),
		$collapse_overlay = $('.overlay-bg');

		$collapse_overlay.toggleClass('active');
		if ( $sidebar_offcanvas.hasClass('js-left-menu-advaced') ) {
			$sidebar_offcanvas.find('.js-short-list-filter').trigger('show.bs.dropdown');
		}
		$sidebar_offcanvas.toggleClass('show');
		$('.wrap-content').toggleClass('no-scroll');
	}

	render() {
		let common = {
			top: {
				trans: {
					'logo': 'logo',
					'home_page': 'Tile Expert',
					'left_menu_slogan': 'Smart Pricing',
					'main_menu_about': 'About Us',
					'main_menu_payment_delivery': 'Payment and Delivery',
					'main_menu_faq': 'FAQ',
					'main_menu_contacts': 'Contacts',
					'footer_company': 'Company',

					'left_menu_profile' : 'Profile',
					'header_login' : 'Sign In',
					'header_registration' : 'Sign Up',
					'header_logot' : 'Sign Out',
					'left_menu_profile_edit': 'Edit profile',

					'contacts_live_chat' : 'Chat with Customer Support',

					'header_history': 'History',
					'header_storage_ideas_add': 'Interior has been added to Ideabook',
					'header_storage_ideas_del' : 'Interior has been removed from Ideabook',
					'header_storage_ideas_move' : 'Interior was moved',
					'idea_header_list': 'ideabook',
					'collection_interior' : 'interior',
					'collection_interiors' : 'interiors',

					'idea_add_project' : 'Add project',

					'buyOrder_status_draft': 'Ref',
					'header_order_add': 'The item has been added to your order',
					'header_order_del': 'The item has been removed from your order',
					'header_orders': 'Orders',
					'buyOrder_list_article': 'item',// значение в твиг шаблоне пишеться через точку - buyOrder.list.article
					'buyOrder_list_articles': 'items', // значение в твиг шаблоне пишеться через точку - buyOrder.list.articles
					'buyOrder_index_addOrder': 'Add order', // значение в твиг шаблоне пишеться через точку - buyOrder.index.addOrder
					'buyOrder_confirm_header': 'Attention!', // значение в твиг шаблоне пишеться через точку - buyOrder.confirm.header
					'header_alert_signed': 'Please sign in to save the selected items for future visits',

					'user_profile_account' : 'Profile', // значение в твиг шаблоне пишеться через точку -  user.profile.account
 
					'header_language': 'Language',
					'left_menu_all': 'All',
					'header_country': 'Delivery to',
					'local_country_popular': 'Popular Countries', // значение в твиг шаблоне пишеться через точку - local.country.popular
					'local_country_all': 'All Countries',// значение в твиг шаблоне пишеться через точку - local.country.all
					'header_currency' : 'Currency',
					'header_measure' : 'Measure',
					'yes': 'yes',
					'cancel': 'Cancel'
				}
			}
		}
		

		let homeUrl = '/' + Helpers.loc();

		return (
			<header className="top-menu clearfix">
				{/* левая часть хедера */}
				<section className={Helpers.lang() == 'fr' ? "fr-menu left-part js-main-menu-wrapper" : "left-part js-main-menu-wrapper"}>
					
					{/* лого и бургер для вызова бокового меню */}
					<MainLogo 
						trans={common.top.trans}
						homeUrl={ homeUrl }
						showToggleMobileMenu={ this.showToggleMobileMenu } 
					/>

					{/* главное меню сайта */}
					<MainMenu trans={common.top.trans} 
							  links={ this.props.top.links } 
					/>
				</section>

				{/* верхняя часть хедера */}
				<section className={App.lang() == 'fr' ? "fr-menu right-part" : "right-part"} >

					{/* @элементам списка с выпадающими списками при ховере присвоить атрибут data-hover-item
					@блоку с отображением количества присвоить атрибут data-count="{{ количество }}"
					@блок в который вставляем присланный аяксом список должен иметь атрибут role="insert-list"
					@необходимость отправки запроса определяем по data-list-load="false" (если true, то не отправлять, так как список уже загружен)
					@data-item-phrase - атрибут, в котором хранится текущая фраза, обозначающая количество элементов (item или items) */}
					{/* контейнер для элементов при наведении на которые будет показыаться выпадающий список */}
					<HoveredListItems 
							top={this.props.top}
							trans={common.top.trans}
					/>

					{/* ссылки на профиль или регистрацию / авторизацию и настройки локации */}
					<div className="login-locale-block js-login-locale-block">
						<SimpleTabs 
								top={this.props.top}
								trans={common.top.trans}
						/>
					</div>

					

				</section>
			</header>
		);
	}
}

HeaderContainer.displayName = 'components/discuss/HeaderContainer';

function mapDispatchToProps(dispatch) {
  return {
    // fetchHeaderData: bindActionCreators(HeaderActions.fetchHeaderData, dispatch)
  }
}

const mapStateToProps = (state) => {
    return {
        top: state.appState.common.top
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)