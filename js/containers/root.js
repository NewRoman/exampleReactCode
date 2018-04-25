import React from 'react'
import { Route } from 'react-router-dom'

import MainLayout from '../containers/mainLayout';

import Orders from '../containers/orders'
import Order from './order/order'
import Discuss from './discuss/discuss'

const Root = (props) => {
    return (
        <div>
            <MainLayout>
                <Route path={props.baseUrl + 'orders/'} component={Orders}/>
                <Route path={props.baseUrl + 'order/:hash'} component={Order}/>
                <Route path={props.baseUrl + 'discuss'} component={Discuss}/>
                {/*<Route render={() => (<h1>PAGE NOT FOUND</h1>)}/>*/}
            </MainLayout>
        </div>
    )
};

export default Root;