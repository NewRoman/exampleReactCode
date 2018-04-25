import Constants from "../constants/headerConstants";


export default function headerReducer(state = null, action) {
    switch (action.type) {
        case Constants.HEADER_GET_DATA: {
            return {...state, header: action.header};
        }
        case Constants.HEADER_DATA_RECIEVED: {
            return {...state, header: action.header};
        }
        // case Constants.DISCUSS_CHANGE_CONS_STATUS: {
        //     let consultants = state.consultants;
        //     for (let login in action.data) {
        //         if (typeof(state.consultants[login]) !== 'undefined') {
        //             state.consultants[login]['status'] = action.data[login]['status']['id'];
        //         }
        //     }

        //     return {...state, consultants: consultants};
        // }
        // case Constants.DISCUSS_ADD_MSG: {

        //     // если у пользователя не было учетных данных для обмена,
        //     // после первого сообщения добавляем их в хранилище из сообщения
        //     let user = state.user;
        //     if (!user.unid && action.item.unid) {
        //         user = {
        //             ...user,
        //             unid: action.item.commentableUnid, // commentableUnid это идетнтификатор посетителя в сообщении
        //             authorName: action.item.authorName,
        //             username: action.item.authorUsername
        //         };
        //     }

        //     let items = state.items;
        //     if (typeof (action.item.numMsg) !== 'undefined') {
        //         items[action.item.numMsg] = action.item;//чтобы правильно встало сообщение
        //     } else {
        //         items[items.length] = action.item;//чтобы правильно встало сообщение
        //     }

        //     return {...state, items: items, user: user};
        // }
        // case Constants.DISCUSS_CLEAR_NEW_MSG: {
        //     let items = state.items;

        //     items.forEach((item, i) => {
        //         if (!item.readed) {
        //             items[i]['readed'] = true;
        //         }
        //     });

        //     return {...state, items: items};
        // }
        default:
            return state
    }
}
