{/* иконка чата при клике на которую чат открываеться в новом окне */}

import React from 'react'

import Helpers from '../../../startup/appHelpers'

// svg иконка активного чата
import ChatActive from '../../svgs/chatActive'
// дефолтная svg иконка чата
import ChatDefault from '../../svgs/chatDefault'
// svg иконка активного чата на моблиьных
import ChatMobActive from '../../svgs/chatMobActive'
// дефолтная svg иконка чата для мобильных
import ChatMobDefault from '../../svgs/сhatMobDefault'


const ChatInformer = (props) => {

	let trans = props.trans;

	const showDiscussion = true;

	const href= Helpers.lang() + props.uri;
	// data-url адрес на который следует отсылать новое сообщение клиента
	// data-id-client id клиента который отправляет сообщение
    return (
		
		<li className=" user-menu-item order-discus js-first-visit-discuss"
			data-url='send/client/msg'
			data-id-client='client_id'
			// data-close-url="{{ path('cookie_close_hello_message') }}"
			data-hover-item>
			{/* если есть новые сообщения в обсуждениях по заказу то добавить клас active */}
			<a  rel="nofollow" 
				className={props.unreadAll>0 ? 'order-discus active help-tooltip' : 'order-discus help-tooltip'}
				target="_blank" 
				// разобраться почему тут адрес сылки выглядит как te.loc/en/en/discuss/
				href={ href } 
				data-unid={ props.userUnidChat } 
			>
				<i className="discus-added-to-project">
					<ChatActive />
				</i>
				<i className="discus-not-added-to-project">
					<ChatDefault />
				</i>
				<i className="discus-added-mob">
					<ChatMobActive />
				</i>
				<i className="discus-not-added-mob">
					<ChatMobDefault />
				</i>
				<span className="val order-discuss-count" 
					  data-url={ props.updateUrl } 
					  data-count={ props.unreadAll }
				>
					{ props.unreadAll }
				</span>
			</a>
			<div className="order-discus-block popup-block ">
				{ trans.contacts_live_chat }
			</div>
		</li>

    );
};

ChatInformer.displayName = 'components/discuss/chatInformer';

export default ChatInformer