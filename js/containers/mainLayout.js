import React, {Component} from 'react';
// import { Link } from 'react-router';
import Helpers from '../startup/appHelpers'
import HeaderContainer from './header/HeaderContainer'
import HeaderContainerTR from './header/HeaderContainerTR'
import CommonSearchSphinx from './common/CommonSearchSphinx'


class MainLayout extends Component {

    constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="wrap-content">

				<div className="up-button up-scroll"></div>

				<CommonSearchSphinx />

				{/* баннер-сообщение сверху страницы о том, что проводятся работы на сайте (обновления и т.п.)  */}
				{/* { te.checkIsUpdated && (
					<div className="{{ userLocale() }} alert show-alert-update alert-warning alert-dismissible text-center fade in" role="alert">
						<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<strong class='warning-ico-bg'></strong> <span class="text-large">
							{te.checkIsUpdated | raw }
						</span>
					</div>) } */}


				{ Helpers.env('TE') ? <HeaderContainer /> : <HeaderContainerTR /> }

				<div className="wrap">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-12">
								<div id="main"  className="clearfix main">
									{this.props.children}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="both"></div>

				{ Helpers.env('TE') ? (<div className="push">push</div>) : '' }

			</div>
		);
	}
}


MainLayout.displayName = 'components/discuss/MainLayout';

export default MainLayout