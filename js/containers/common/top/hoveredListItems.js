import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import Helpers from '../../../startup/appHelpers'

import PopupListActions from '../../../actions/popupListActions'


{/* профиль пользователя */}
import UserProfileMobile from '../../../components/common/top/userProfileMobile'

{/* иконка чата при клике на которую чат открываеться в новом окне */}
import ChatInformer from '../../../components/common/top/chatInformer'

{/* просмотреные пользователем страницы */}
import PageHistory from '../../../components/common/top/pageHistory'

{/* идеи пользователя */}
import Ideas from '../../../components/common/top/ideas'

{/* заказы пользователя */}
import Orders from '../../../components/common/top/orders'



class HoveredListItems extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showPopup: false,
			popUpHtml: false
		}
		
		this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
		this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);

	}

	componentDidMount() {
		// тут посылаем запрос на получение данных для записи их в store.header
		// this.props.fetchPopupListData();
// console.log('componentDidMount')
		// подключаем функционал по подгрузке списков в хедере при наведении на иконки
		// let $ = window.$;
		// var hoveredMenu = new HoveredItemMenu($('[data-user-menu]'));
		// hoveredMenu.init();
	}

	componentDidUpdate() {
		// console.log('componentDidUPdate')
	}

	onMouseEnterHandler(e) {
		let state = this.state;
		state.showPopup = !state.showPopup;
		this.setState( state );
		console.log('after state change')
		
		const listBlock = e.currentTarget.querySelector("[role='insert-list']");
		const targetHeight = parseInt(document.documentElement.clientHeight - e.currentTarget.offsetHeight - 100);
		const getParam = '?targetHeight=' + targetHeight;
		let action = listBlock.getAttribute('data-action');
		// адрес по которому получаем данные (сейчас это html) для выпадающего списка
		action = action + getParam;
		this.props.fetchPopupListData( action );

	}

	onMouseLeaveHandler() {
		
	}

	render() {
		let isInCountryList = !!this.props.top.countryList[Helpers.country()] ? this.props.top.countryList[Helpers.country()]['name'] : false;
		console.log(this.props.popupList)

		return (
			<ul className="list-inline list-user-menu js-list-user-menu  pull-right " data-user-menu >
				{/* напоминания пользователя */}
				{/* функционал еще не готов */}
				<li className="hidden user-menu-item">
					<a className="notify help-tooltip not-ready" href="#"
					//    title="{{ 'header_notifications' | trans }} ({{ 'header_under_construction' | trans }})"
					   >
						<i className="material-icons">&#xE7F5;</i>
						(0)
					</a>
				</li>

				{/* записки пользователя */}
				{/* показать когда будет готов данный функционал */}
				<li className=" user-menu-item hidden">
					<a className="note help-tooltip not-ready" 
						href="javascript:void(0)"
					    // title="{{ 'header_note' | trans }} ({{ 'header_under_construction' | trans }})"
					>
						<i className="material-icons">&#xE616;</i>
						(0)
					</a>
				</li>

				{/* поиск по сайту для мобильных устройств */}
				<li className="search-site-item user-menu-item-mobile user-menu-item">
					<span className="sphinx-button-mobile js-sphinx-button">
						{/* { 'TretoWebBundle:SVGIconsCode:search.html.twig' } */}
					</span>
				</li>

				{/* профиль пользователя на мобильных */}
				<UserProfileMobile 
					user={ this.props.top.user } 
					trans={ this.props.trans }
					userCountry={ this.props.top.userCountryWas }
					isInCountryList={ isInCountryList }
				/>

				<ChatInformer 
					trans={ this.props.trans }
					unreadAll={ this.props.top.unreadAll }
					uri={ this.props.top.uri }
					userUnidChat={ this.props.top.userUnidChat }
					updateUrl={ this.props.top.updateUrl }
				
				 />

				 <PageHistory 
				 	visitedAll={ this.props.top.visitedAll }
					trans={ this.props.trans }
					state={ this.state }
					onMouseEnterHandler={this.onMouseEnterHandler}
					onMouseLeaveHandler={this.onMouseLeaveHandler}
					popupData = { this.props.popupList.popupData }
				/>

				<Ideas 
				 	ideas={ this.props.top.ideas }
					trans={ this.props.trans }
				/>

				<Orders 
					userName={ this.props.top.user.name }
					orderArticlesAll={ this.props.top.orderArticlesAll }
					trans={ this.props.trans }
				/>

			</ul>
		);
	}
}
 
HoveredListItems.displayName = 'components/discuss/hoveredListItems';

function mapDispatchToProps(dispatch) {
  return {
    fetchPopupListData: bindActionCreators(PopupListActions.fetchPopupListData, dispatch)
  }
}

const mapStateToProps = (state) => {
    return {
        popupList: state.appState.popupList
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HoveredListItems)

// export default HoveredListItems