import {combineReducers} from "redux";
import booksReducer from './booksReducer';
import routeReducer from './routeReducer';

const rootReducer = combineReducers({
    booksReducer,
    routeReducer
});

export default rootReducer;