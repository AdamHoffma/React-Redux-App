import {
    FETCH_RON_DATA,
    FETCH_RON_DATA_SUCCESS,
    FETCH_RON_DATA_FAIL
} from '../actions/actions'

const initialState = {
    RonQuote: [],
    isLoading: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_RON_DATA:
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case FETCH_RON_DATA_SUCCESS:
            return {
                ...state,
                RonQuote: action.payload,
                isLoading: false
            }
        
        default: return state
    }
}