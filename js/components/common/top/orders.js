{/* заказы пользователя */}

import React from 'react'

import Helpers from '../../../startup/appHelpers'

// svg иконка лампочки активная
import CartActive from '../../svgs/cartActive'
// svg иконка лампочки неактивная
import CartDefault from '../../svgs/cartDefault'

const Orders = (props) => {

	let trans = props.trans;

	// const showDiscussion = true;
	const href= '/' + Helpers.loc() + '/buy-orders';// проверить правильность адреса
	const hrefMeta= '/' + Helpers.loc() + '/json/article/settings/0';// проверить правильность адреса
	const dataLastOrdersAction = '/' + Helpers.loc() + '/last_buy-orders';// проверить правильность адреса
	const dataOrderCreateAction = '/' + Helpers.loc() + '/json/buy-order/create/' + trans.buyOrder_status_draft;// проверить правильность адреса
	const dataNoLoginMsgAction = '/' + Helpers.loc() + '/json/alert/popup';// проверить правильность адреса

	// изменение количества скрипт находит все [data-change-count], в зависимости от [data-type-project], и изменяет количество в них
    return (
		<li className="order-menu js-order-menu user-menu-item js-hovered-item" data-hover-item data-type-project="order">
			{/* специальный url для получения свойств артикула */}
			<meta name="urlArticleInfo" content={ hrefMeta } property="" />
			<a className={ props.orderArticlesAll > 0 ? 'order active' : 'order' } 
				href={ href }
			>
						<i className="order-added-to-project">
							<CartActive />
						</i>
						<i className="order-not-added-to-project">
							<CartDefault />
						</i>
						<span className="val" data-change-count={ props.orderArticlesAll }>{ props.orderArticlesAll }</span>

				{/* сообщение с иконкой и фразой, что элемент добавлен в проект */}
				<div data-order-add-block>
					<div className="icon-order" >
						<div className="sprite-order-added"></div>
					</div>
					<div className="txt-order" data-add={ trans.header_order_add }
							data-del={ trans.header_order_del  }></div>
				</div>
			</a>

			<div className="order-block hidden-xs popup-block">
				<h5>
					<span className='title'>{ trans.header_orders }</span>&nbsp;
					<span>(&nbsp;</span>
					<a className="articles-count" href={ href } data-change-count={ props.orderArticlesAll }> { props.orderArticlesAll } </a>
					<span id="aNameTrns" 
							data-item-phrase={ props.orderArticlesAll > 1 ? trans.buyOrder_list_articles : trans.buyOrder_list_article }>
						{ props.orderArticlesAll > 1 ? trans.buyOrder_list_articles : trans.buyOrder_list_article }
					</span>
					<span>&nbsp;)</span>
					<span className="count-orders hidden" data-count={ props.ordersCount }>{ props.ordersCount }</span>
				</h5>
				<div className="block-order-content  block-content"
						data-action={ dataLastOrdersAction }
						role="insert-list"
						data-list-load="false">
				</div>
 
				{/* кнопка для добавления заказа  */}
				{ Helpers.env('TE') && (
					<div id="add_order_btn" className="block-add-order-btn text-right add-btn-block" data-proj-btn-block>
						<span className="js-add-order-btn add-order-btn add-project-btn"
								role="add-proj-btn"
								data-action={ dataOrderCreateAction }>
							{ trans.buyOrder_index_addOrder }
						</span>
					</div>
				) }
			</div>
 
			{ props.userName == null && (
				<div id="no_login_msg"
						className="alert-order-block popup-block"
						data-alert=""
						data-action={ dataNoLoginMsgAction }
				>
					<div className="alert-top-image"></div>
					<div className="alert-text">
						<span>
							{ trans.buyOrder_confirm_header }!
						</span>
						{ trans.header_alert_signed }
					</div>
					<div className="cls-alert-btn">
						<i className="material-icons">&#xE5CD;</i>
					</div>
				</div>
			) }
				
		</li>
    );
};

Orders.displayName = 'components/discuss/orders';

export default Orders