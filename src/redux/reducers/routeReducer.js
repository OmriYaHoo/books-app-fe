import initialState from "./routesState";
import * as actions from '../actions/middlewareActions';

export default function routeReducer(state = initialState, action) {
    switch (action.type) {
        case actions.CHANGE_ROUTE:
            return {
                ...state,
                route: action.payload
            };
        default:
            return {
                ...state,
            };
    }
}