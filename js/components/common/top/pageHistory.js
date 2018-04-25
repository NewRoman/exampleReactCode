{/* просмотренные пользователем страницы */}

import React from 'react'

import Helpers from '../../../startup/appHelpers'

// svg иконка history
import HistoryActive from '../../svgs/historyActive'

// дефолтная svg иконка history
import HistoryDefault from '../../svgs/historyDefault'
// svg иконка активного чата на моблиьных
// import ChatMobActive from '../../svgs/chatMobActive'
// дефолтная svg иконка чата для мобильных
// import ChatMobDefault from '../../svgs/сhatMobDefault'


const PageHistory = (props) => {

	let trans = props.trans;

	// const showDiscussion = true;
	const href= '/' + Helpers.loc() + '/history';// проверить правильность адреса
	const hrefMeta= '/' + Helpers.loc() + '/history/save';// проверить правильность адреса
	const dataLastVisitAction = '/' + Helpers.loc() + '/last-history';// проверить правильность адреса
	const state = props.state;
	const popupClass = state.showPopup ? 'watch-block popup-block popup-block-last-visits active' : 'watch-block popup-block popup-block-last-visits';
	
	return (
		<li 
			className="watch-menu user-menu-item hidden-xs" 
			data-hover-item 
			onMouseEnter={ props.onMouseEnterHandler }
			onMouseLeave={ props.onMouseLeaveHandler }
		>
			<meta name="urlSetHistory" content={ hrefMeta } property="" />
			<a className={ props.visitedAll > 0 ? 'watch help-tooltip active' : 'watch help-tooltip' } 
				href={ href }>
				<i className="watch-added-to-project">
					<HistoryActive />
				</i>
				
				<i className="watch-not-added-to-project">
					<HistoryDefault />
				</i>
				<span className="val watch-count" data-count={ props.visitedAll }>{ props.visitedAll }</span>
			</a>
			<div className={ popupClass }>
				<h5>
					<span className='title'>{ trans.header_history }</span>&nbsp;
					<a href={ href }>(<span className="watch-count">{ props.visitedAll }</span>)</a>
				</h5>
				<div className="block-watch-content"
						data-action={ dataLastVisitAction }
						role="insert-list"
						data-list-load="false"
						dangerouslySetInnerHTML={{ __html: props.popupData}}
				>
					
					
				</div>
			</div>
		</li>
    );
};

PageHistory.displayName = 'components/discuss/pageHistory';

export default PageHistory