import React, {Component, PropTypes} from 'react'
import Helpers from '../../startup/appHelpers'
import CommonSearchSphinxView from '../../components/CommonSearchSphinx'

class CommonSearchSphinx extends Component {

	constructor(props) {
		super(props);
 
		// this.handleChange = this.handleChange.bind(this);
		this.submitSearch = this.submitSearch.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
        // // this.processForm = this.processForm.bind(this);
		// this.toggleSearchForm = this.toggleSearchForm.bind(this);
		this.sphinxInputClear = this.sphinxInputClear.bind(this);
		this.searchItemClick = this.searchItemClick.bind(this);


		this.state = {
			clearedSearchInput: false,
			searchResultGot: false
        };

	}

	componentDidMount() {
		this.resizeSearchResize();
	}	

	componentDidUpdate() {
       this.initSearchResults();
	}

	/** 
	 * @todo проверить на работоспособность данный код
	*/
	resizeSearchResize() {
		// let $ = window.$;	
		// let _this = this;
		// $(window).resize(function() {
		// 	clearTimeout(searchResizeTimer);
		// 	searchResizeTimer = setTimeout(function() {
		// 		_this.initSearchElems();
		// 		_this.initSearchResults();
		// 	}, 200);
		// });
	}

	/**
	 * @todo разобраться что это за код и оптимизировать его
	 * возможно тут можно обойтись без jquery
	 */
	initSearchElems() {
		let $ = window.$;
        var $wrapper = $('.sphinx-input-wrapper'),
            zIndex = App.getZIndex(),
            margin, padding;

        $wrapper.removeAttr('style');
        if (zIndex == 3 || zIndex == 4) {
            margin = $('.sphinx-search-close').outerWidth();
            $wrapper.css('margin-right', margin);
        } else {
            padding = $('.sphinx-submit-button').outerWidth() + 10;
            $wrapper.css('padding-right', padding);
        }
    }

	/**
	 * @todo оптимизировать данный код
	 * возможно тут можно обойтись без jquery
	 */
	initSearchResults() {
		let $ = window.$;
        var $results = $('.s-r-suggester-list');

        if ($results.find('.s-r-column').length != 0) {
            var $moreLink = $('.s-r-more-link-wrapper'),
                wHeight = $(window).height(),
                totalImgs = $results.find('img').length,
                imgsLoaded = 0, lisLength,
                fakeSrc, i;

            $moreLink.removeClass('shown');
            $('.s-r-suggester-wrapper').slideDown(100);
            if ( App.smartphone() ) {
                $results.find('.s-r-text').css('width', $(window).width() - 130);
                $results.find('li').removeAttr('style');
                lisLength = $results.find('li').length,
                // Перед тем, как скрыть лишние li, дождаться загрузки всех изображений, чтобы высчитать высоту
                $results.find('img').each(function() {
                    fakeSrc = $(this).attr('src');
                    $('<img/>').attr('src', fakeSrc).css('display', 'none').load(function() {
                        imgsLoaded++;
                        if (imgsLoaded >= totalImgs) {
                            for (i = lisLength; i >= 0; i--) {
                                if ($('.s-r-suggester-wrapper').outerHeight() + 86 > wHeight) {
                                    $results.find('li:eq(' + i + ')').hide();
                                } else {
                                    if (i < lisLength) {
                                        $moreLink.addClass('shown');
                                    }
                                    break;
                                }
                            }
                        }
                    });
                });
            } else {
                $results.find('li').each(function() {
                    if ( $(this).is(':hidden') ) {
                        $moreLink.addClass('shown');
                        return true;
                    }
                });
            }
        }
	}
	/**
	 * @todo разобраться что это за код
	 */
	valueInputLength( input ) {
        var alertMessage = input.getAttribute('data-alert-message'),
            valueDefault = input.getAttribute('data-value-empty'),
            valueInput = input.value,
            vl = valueInput.length,
            out = false;

        if (valueInput != valueDefault) {
            if (3 <= vl && vl < 100 ) {
                out = valueInput;
            } else {
                App.Messages.error(alertMessage + ' - ' + vl);
            }
        }
        return out;
    }

	// очистить поле ввода на мобильных и спрятать крестик для очистки поля
	handleKeyUp( e ) {
		if (e.keyCode != 13 && e.keyCode != 38 && e.keyCode != 40) {
			let suggesterList = document.getElementById('suggesterList'),
				input = document.getElementById('SearchOfSphinxInput'),
				text = input.value, 
				url
				;
            // if ($(this).val().trim() !== '') {
            //     $('.sphinx-input-clear').addClass('visible');
            // }
            if (text.length > 2) {
                url =  e.target.getAttribute('data-url') + '?q=' + encodeURIComponent(text);
            //     if (xhrSuggester !== null) {
            //         xhrSuggester.abort();
			//     }
				// тут необходимо вместо html получать с сервера json обьект с данными которые будут использоваться для рендера найденых елементов 
				fetch(url)
					.then((response) => {
						return response.text() 
					})
					.then((data) => {
						// console.log(suggesterList)
						// suggesterList.innerHTML = data;
						this.state.searchResultGot = data;
						this.setState(this.state);

					})
					.catch(function(err) {
						// console.log(err)
					});

            //     
            } else {
				this.state.searchResultGot = false;
				this.setState(this.state);
			}
        }
	}

	handleKeyDown(e) {
		if (e.keyCode == 13 && document.querySelectorAll('.s-r-suggester-list li.active').length == 0) {
            if (e.target.value.length > 2) {
                this.getSearchData( e.target );
            } else {
                this.valueInputLength( e.target )
            }
        }
	}

	// очистить поле ввода на мобильных и спрятать крестик для очистки поля
	sphinxInputClear() {
		let input = document.getElementById('SearchOfSphinxInput');
		input.value = '';
		input.focus();

		let state = this.state;
		state.clearedSearchInput = !state.clearedSearchInput;
		this.setState(state);
	}

	// жмем на кнопку Search для запуска поиска
	submitSearch() {
		// console.log( 'submitSearch' )
		let input = document.getElementById('SearchOfSphinxInput');
		// $sphinxInput = $(this).closest('.js-sphinx-search').find('.js-sphinx-input'),
		let valueLength = input.value.length;
		// console.log( input.value.length )
		// return;

        if ( valueLength > 2 ) {
			this.getSearchData( input );
			// console.log( 'vl > 2' )
        } else {
			let alertMessage = input.getAttribute('data-alert-message');
			// console.log( 'App.Messages.error' )
            App.Messages.error(alertMessage + ' - ' + vl);
        }
	}

	getSearchData( input ) {
		location.href = input.getAttribute('data-action') + '?q=' + encodeURIComponent( input.value );
	}

	/**
	 * при клике по елементу из результатов поиска перейти на страницу результата
	 * @param {event} e 
	 */
	searchItemClick( e ) {
		// найти среди родителей елемент списка li
		function _findAncestor (el, nameNode) {
			while ((el = el.parentElement) && !el.nodeName.match( nameNode ));
			return el;
		}

		let searchUrl = e.target.nodeName == 'LI' ? e.target.getAttribute('data-url') : _findAncestor( e.target, 'LI' ).getAttribute('data-url');

		location.href = searchUrl;
	}

	/**
	 * показать еще результаты поиска в блоке под полем с текстом запроса
	 */

	 // @todo этот код относиться к странице поиска для подгрузки елементов при клике на кнопке More
	 // поэтому его надо будет перенести на страницу поиска
	// showMoreSearchItems( e ) {
	// 	if ( e.target.classList.contains('js-more') ) {

	// 		let $ = window.$;

	// 		var $curLink = $(this);

	// 		if ( $curLink.hasClass('being-loaded') ) {
	// 			return false;
	// 		}

	// 		var $list = $( $curLink.attr('data-target') ),
	// 			elsNum = (App.getZIndex() == 3 || App.getZIndex() == 4) ? 3 : 10,
	// 			elsCount = parseInt( $curLink.attr('data-count') ),
	// 			allEls = true,
	// 			i = 0;

	// 		function showHiddenLis() {
	// 			$list.find('li:hidden').each(function() {
	// 				if (i < elsNum) {
	// 					$(this).addClass('li-shown');
	// 				} else {
	// 					allEls = false;
	// 					return false;
	// 				}
	// 				i++;
	// 			});
	// 			if (allEls && $list.find('li').length >= elsCount) {
	// 				$curLink.hide();
	// 			} else {
	// 				allEls = false;
	// 			}
	// 		}

	// 		function loadMoreResults() {
	// 			var curPortion = parseInt( $curLink.attr('data-current-portion') ) + 1,
	// 				curUrl = location.href,
	// 				url;

	// 			url = $curLink.attr('data-portion-url');
	// 			url = url + '/' + curPortion + '?q=' + curUrl.substr(curUrl.indexOf('?q=') + 3);
	// 			$curLink.attr('data-current-portion', curPortion);
	// 			$curLink.hide().parent().append('<div class="smallTimer"></div>');
	// 			$.ajax({
	// 				url: url,
	// 				type: 'POST',
	// 				dataType: 'html',
	// 				complete: function() {
	// 					$curLink.show().parent().find('.smallTimer').remove();
	// 				},
	// 				success: function(html) {
	// 					$list.append(html);
	// 					showHiddenLis();
	// 					if (allEls) {
	// 						$curLink.hide();
	// 					}
	// 				}
	// 			});
	// 		};

	// 		if ($list.find('li:visible').length === $list.find('li').length
	// 			&& $list.find('li').length < elsCount) {
	// 			loadMoreResults();
	// 		} else {
	// 			showHiddenLis();
	// 			if (allEls && $list.find('li').length < elsCount) {
	// 				loadMoreResults();
	// 			}
	// 		}
	// 	}
	// }

	render() {
		let dataAction = '/' + Helpers.loc() + '/search'
		let dataUrl = '/' + Helpers.loc() + '/search-suggester';
		return (
			<CommonSearchSphinxView 
				sphinxInputClear={this.sphinxInputClear} 
				searchItemClick = { this.searchItemClick }
				submitSearch={this.submitSearch} 
				handleKeyUp={ this.handleKeyUp }
				handleKeyDown={ this.handleKeyDown }
				dataAction={ dataAction }  
				dataUrl={ dataUrl } 
				state={this.state}
			/>
		);
	}

}

// function mapDispatchToProps(dispatch) {
// 	return {
// 	  fetchHeaderData: bindActionCreators(HeaderActions.fetchHeaderData, dispatch)
// 	}
//   }
  
//   const mapStateToProps = (state) => {
// 	  return {
// 		  header: state.appState.header
// 	  }
//   };

export default CommonSearchSphinx
  
// export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

CommonSearchSphinx.displayName = 'components/discuss/CommonSearchSphinx';