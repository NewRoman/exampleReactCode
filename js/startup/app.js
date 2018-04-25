import React from 'react'
import { Provider } from 'react-redux'
import Root from '../containers/root'
import { BrowserRouter, StaticRouter } from 'react-router-dom'
import ReactOnRails from 'react-on-rails'

const mainNode = (_initialProps, context) => {
    const store = ReactOnRails.getStore('appStore');
    const { location, base, serverSide } = context;

    //console.log('app.js context:', context);

    let loc = document.documentElement.getAttribute('data-locale');
    let baseUrl = base + '/' + ((!loc) ? 'en/' : (loc + '/'));

    let Router;
    if (serverSide) {
        Router = (props) => (
            <StaticRouter location={location} context={{}} >
                {props.children}
            </StaticRouter>
        )
    } else {
        Router = (props) => {
            return (
                <BrowserRouter>
                    {props.children}
                </BrowserRouter>
            )
        }
    }

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Root baseUrl={baseUrl} />
            </BrowserRouter>
        </Provider>
    )
};

export default mainNode
