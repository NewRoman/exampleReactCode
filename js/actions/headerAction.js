import Constants from '../constants/headerConstants'
import Helpers from '../startup/appHelpers'

const Actions = {

    // извлекаем данные для рендера хедера(начальное состояние хедера)
    fetchHeaderData: () => dispatch => {
        // dispatch({ type: Constants.DISCUSS_FETCHING });
		
		// tutorial https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
        fetch(Helpers.baseUrl() + 'top').then((response) => {
            return response.json()
        }).then((data) => {
			// console.log('data from Action header', data)
            dispatch({
                type: Constants.HEADER_DATA_RECIEVED,
                header: data
            })
        })
    },
};

export default Actions
