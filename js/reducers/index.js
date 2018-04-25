import { combineReducers }  from 'redux'

import commonReducer from './commonReducer'
import orderReducer from './orderReducer'
import ordersReducer from './ordersReducer'
import discussReducer from './discussReducer'
import headerReducer from './headerReducer'
import popupListReducer from './popupListReducer'
//import { initialState as appState } from './order/ordersReducer'

let appReducer = combineReducers({
    popupList: popupListReducer,
    common: commonReducer,
    order: orderReducer,
    orders: ordersReducer,
    discuss: discussReducer
});


export default combineReducers({
    appState: appReducer
});

//export const initialStates = {
//    appState,
//};
