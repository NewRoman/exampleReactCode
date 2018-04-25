{/* просмотренные пользователем страницы */}

import React from 'react'

import Helpers from '../../../startup/appHelpers'

// svg иконка лампочки активная
import LampIdeaAddedTop from '../../svgs/lampIdeaAddedTop'
// svg иконка лампочки неактивная
import LampIdeaNoAddedTop from '../../svgs/lampIdeaNoAddedTop'

const Ideas = (props) => {

	let trans = props.trans;

	// const showDiscussion = true;
	const href= '/' + Helpers.loc() + '/ideabook';// проверить правильность адреса
	const hrefMeta= '/' + Helpers.loc() + '/history/save';// проверить правильность адреса
	const dataLastIdeaAction = '/' + Helpers.loc() + '/ideabook/last';// проверить правильность адреса
	const dataIdeaCreateAction = '/' + Helpers.loc() + '/json/ideabook/create/' + trans.idea_create_project;// проверить правильность адреса
	

    return (
		<li className="idea-menu user-menu-item" data-hover-item data-type-project="idea">
			<a className={ props.ideas > 0 ? 'star idea-informer active' : 'star idea-informer ' }
				href={ href }>
				<i className="idea-added-to-project">
					<LampIdeaAddedTop />
				</i>
				<i className="idea-not-added-to-project">
					<LampIdeaNoAddedTop />
				</i>
				<span className="val" data-change-count={ props.ideas }>{ props.ideas }</span>

				{/* сообщение с иконкой и фразой, что элемент добавлен в проект */}
				<div data-idea-add-block>
					<div className="icon-idea">
						<div className="sprite-idea-added"></div>
					</div>
					<div className="txt-idea" data-add={ trans.header_storage_ideas_add }
							data-del={ trans.header_storage_ideas_del }
							data-move={ trans.header_storage_ideas_move }></div>
				</div>
			</a>
			<div className="idea-block hidden-xs popup-block">
				<h5>
					<span className='title'>{ trans.idea_header_list }</span>&nbsp;
					<span>(&nbsp;</span>
					<a className="count-ideas" href="#" data-change-count={ props.ideas } data-count={ props.ideas }> { props.ideas }  </a>
					<span> 
						{ props.ideas > 1 ? trans.collection_interiors : trans.collection_interior }  </span>
					<span>&nbsp;)</span>
				</h5>
				<div className="block-idea-content block-content"
						data-action={ dataLastIdeaAction }
						role="insert-list"
						data-list-load="false">
				</div>

				{/* кнопка для добавления проекта идей  */}
				{ Helpers.env('TE') && (
					<div className="block-add-order-btn text-right add-btn-block" data-proj-btn-block>
						<span className="js-add-order-btn add-project-btn"
								role="add-proj-btn"
								data-action={ dataIdeaCreateAction }
						>
							{ trans.idea_add_project }
						</span>
					</div>
				) }
			</div>
		</li>
    );
};

Ideas.displayName = 'components/discuss/ideas';

export default Ideas