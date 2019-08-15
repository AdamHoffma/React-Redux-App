import axios from 'axios'
export const FETCH_RON_DATA = 'FETCH_RON_DATA';
export const FETCH_RON_DATA_SUCCESS = 'FETCH_RON_DATA_SUCCESS'
export const FETCH_RON_DATA_FAIL = 'FETCH_RON_DATA_FAIL'


export const ronData = () => {
    return dispatch => {
        dispatch({type: FETCH_RON_DATA})
        axios
        .get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(res => {
            console.log(res)
            dispatch({type: FETCH_RON_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FETCH_RON_DATA_FAIL, payload: err.response})
        })
    }
}