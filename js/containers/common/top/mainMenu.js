import React, {Component, PropTypes} from 'react'

// import Helpers from '../../../startup/appHelpers'

{/* компонент - регистрация,авторизация,профиль пользователя */}
// import LoginHeader from '../../components/common/top/loginHeader'

{/* компонент - cписок стран */}
import MainMenuView from '../../../components/common/top/mainMenuView'

class MainMenu extends Component {
	constructor(props) {
		super(props);
		
		this.timerResize;// таймер ресайза страницы - чтобы расайз отрабатывал толкьо один раз при ресайзе
		this.showHiddenItems = this.showHiddenItems.bind( this )
		this.rebuildMainMenuResized = this.rebuildMainMenuResized.bind( this )
	}

	componentDidMount() {
		this.showMainMenu();

		clearTimeout(self.timerResize);
		window.addEventListener("resize", this.rebuildMainMenuResized);
	}

	/** 
	 * показать главное мнею сайта(спрятав за троеточие те пункты которые не помещаються)
	*/
	showMainMenu() {
		let mainMenu = document.querySelector('.js-main-menu');

		if (this.checkWidthForRebuildMenu()) {
			// $mainMenu.hide();
			mainMenu.style.visibility = 'hiden';
			this.rebuildMainMenu();
		}

		mainMenu.style.visibility = 'visible';
	}
	/**
	* перестроить главное меню спрятав за троеточие пункты которые не помещаютсья
	*/
	rebuildMainMenu() {
		let dropdownButton = document.querySelector('.js-main-menu .js-drop-menu-items');

		// dropdownButton.removeClass('hidden');
		dropdownButton.classList.remove("hidden");
		let dropdownLinks = document.querySelectorAll('.js-main-menu > li:not(.js-drop-menu-items)');

		// превращаем в настоящий масив
		dropdownLinks = Array.from( dropdownLinks );

		for (var i=0; i<dropdownLinks.length; i++) {
			if ( this.checkWidthForRebuildMenu() ) {
				dropdownLinks[i].classList.add('hidden');
				let dataClass = dropdownLinks[i].getAttribute('data-cls');
				document.querySelector( dataClass ).classList.remove("hide");
			}
		}
	}
	/**
	 * при ресайзе перестроить главное меню спрятав те елементы которые не помещаються по ширине под троеточие
	 */
	// @todo добавить задержку чтобы при ресайзе не было множественого исполнения данной функции
	rebuildMainMenuResized() {
		let self = this;
		setTimeout(function(){
			let mainMenu = document.querySelector('.js-main-menu');
			mainMenu.style.visibility = 'hiden';
			clearTimeout(self.timerResize);
			self.timerResize = setTimeout(function(){
				let dropdownLinks = document.querySelectorAll('.js-main-menu > li:not(.js-drop-menu-items)');
				// превращаем в настоящий масив
				dropdownLinks = Array.from( dropdownLinks );
				for (var i=0; i<dropdownLinks.length; i++) {
					dropdownLinks[i].classList.remove("hidden");
				}
				let dropdownButton = document.querySelector('.js-main-menu .js-drop-menu-items');
				dropdownButton.classList.add("hidden");

				for (var i=0; i<dropdownLinks.length; i++) {
					let dataClass = dropdownLinks[i].getAttribute('data-cls');
					document.querySelector( dataClass ).classList.add("hide");
					if ( self.checkWidthForRebuildMenu() ) {
						i == 0 ? dropdownButton.classList.remove('hidden') : false;
						dropdownLinks[i].classList.add('hidden');
						document.querySelector( dataClass ).classList.remove("hide");
					}
				}

				mainMenu.style.visibility = 'visible';
			}, 700);
		}, 700);
	}
	/**
	 * проверяем помещаються ли все пункты меню в родительском блоке
	 * DIFF погрешность при вычислении ширины(метод width отбрасывает все после запятой а браузер считает с дробной частью)
     * сейчас DIFF взято с большим запасом так как не удаеться выяснить причину по которой на iOS checkWidthForRebuildMenu возвращает ложь
	 */
	checkWidthForRebuildMenu() {
		// родительский елемент для меню
		let menuWrapper = document.querySelector('.js-main-menu-wrapper');
		let wrapperCoords = menuWrapper.getBoundingClientRect();
		let menuWrapperWidth = wrapperCoords.right - wrapperCoords.left;
		// меню
		let mainMenu = document.querySelector('.js-main-menu');
		let menuCoords = mainMenu.getBoundingClientRect();
		let menuWidth = menuCoords.right - menuCoords.left;
		// соседний с родительским елементом menuWrapper
		let siblingMenuWrapper = document.querySelector('.js-sibling-main-menu');
		let siblingCoords = siblingMenuWrapper.getBoundingClientRect();
		let siblingWidth = siblingCoords.right - siblingCoords.left;

		let DIFF = 10;

		return menuWrapperWidth - DIFF < menuWidth + siblingWidth ? true : false;
	}
	/**
	 * при клике на троеточие показать все пункты меню которые не поместились в видимую область
	 */
	showHiddenItems( e ) {
		let toggledItemsList = document.querySelector('.js-hide-toggle');

		// toggledItemsList.style.height = toggledItemsList.clientHeight + 'px';
		toggledItemsList.classList.toggle('hide-toggle');

	}

	render() { 
		// классы для отображения главного меню(About Us, Contact etc)
		let topClasses = 'list-inline pull-left hidden-xs';
		let hiddenTopClass = 'hidden';

		return (
			<MainMenuView 
				trans={ this.props.trans } 
				links={ this.props.links } 
				topClasses={ topClasses } 
				hiddenClass={hiddenTopClass}
				showHiddenItems={ this.showHiddenItems }
			/>
		)
	}
}
 
MainMenu.displayName = 'components/discuss/mainMenu';

export default MainMenu