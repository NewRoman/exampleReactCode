import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

export default function configureStore(props, context) {

    const { common, order, orders, discuss } = props;

    // объект для выпадающих списков в хедере
    const popupList = {
        popupData: ''
    };

    //const { base, location } = context;
    //let baseUrl = base + '/en/';console.log('context', context);
    //console.log('appStore context:', context);


    const initialState = {
        appState: {
            popupList: popupList,
            common: common,
            order: order,
            orders: orders,
            discuss: discuss,
            // footer: footer
        }
    };

    let composeEnhancers = typeof(window) !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    )
}
