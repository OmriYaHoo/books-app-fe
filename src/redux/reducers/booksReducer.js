import * as actions from '../actions/middlewareActions';
import initialState from "./booksState";

export default function booksReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_ALL_BOOKS:
            return {
                ...state,
                booksList: action.payload
            };
        case actions.SHOW_BOOK_DETAILS:
            return {
                ...state,
                bookInfo: action.payload
            };
        case actions.ADD_BOOK_TO_USER_CATALOG:
            return {
                ...state,
                userCatalog: action.payload
            };
        default:
            return {
                ...state
            };
    }
}