import Constants from '../constants/popupListConstants'
import Helpers from '../startup/appHelpers'

let $ = window.$;

const Actions = {

    // извлекаем данные для рендера хедера(начальное состояние хедера)
    fetchPopupListData: ( url ) => dispatch => {
        // dispatch({ type: Constants.DISCUSS_FETCHING });
        console.log(url)
        // переделать с использованием axios ИЛИ
        // с использованием fetch - когда будет ответ не в виде разметки а в виде json приходить
        $.ajax({ 
			url: url,
			type: 'GET',
			dataType: 'html',
			success: function (html) {
                console.log(html)
                
                dispatch({
                    type: Constants.POPUP_LIST_DATA_RECIEVED,
                    popupData: html
                })
				
			},
        });
        
		// tutorial https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
        // fetch(url, {
        //     method: "GET",
        //     // body: JSON.stringify(data),
        //     headers: {
        //         "Content-Type": "text/plain"
        //     },
        //     // credentials: "same-origin"
        // }).then((response) => {
        //     // console.log(response.text())
        //     return response.text()
        // }).then((html) => {
		// 	console.log('data from Action header', html)
        //     // dispatch({
        //     //     type: Constants.HEADER_DATA_RECIEVED,
        //     //     header: data
        //     // })
        // })
    },
};

export default Actions
