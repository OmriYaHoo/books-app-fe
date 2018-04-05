import * as actions from './middlewareActions';
export function changeRoute(routeName){
    return {
        type: actions.CHANGE_ROUTE,
        payload: routeName
    }
}