import React, {Component} from 'react';
import { Link } from 'react-router';
import Helpers from '../../startup/appHelpers'
// import HeaderContainer from './header/HeaderContainer'


class HeaderContainerTR extends Component {
	constructor(props) {
        super(props);
	}

	render() {
		return (
			<div>
				<h1>start header TRETO</h1>
			</div>
		);
	}
}

HeaderContainerTR.displayName = 'components/discuss/HeaderContainerTR';

export default HeaderContainerTR