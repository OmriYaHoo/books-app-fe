import axios from 'axios';
import * as middlewareActions from './middlewareActions';
import * as routes from './routes';
import {toast} from 'react-toastify';

let user, pass;

export function getBooksList() {
    return (dispatch) => {
        axios.get('/books',)
            .then(response => {
                dispatch(setBooksList(response.data));
            })
            .catch(error => {
                toast.error("An error has occur while trying to available books.", {position: toast.POSITION.BOTTOM_RIGHT});
            });
    }
}

export function updateUserCatalog() {
    return (dispatch) => {
        axios.get(`/user?userName=${user}&pwd=${pass}`)
            .then(response => {
                dispatch(setUserCatalog(response.data));
            })
            .catch(error => {
                // console.log(error);
                toast.error(error.response.data, {position: toast.POSITION.BOTTOM_RIGHT});
            });
    }
}

export function getUser(userName, pwd) {
    return (dispatch) => {
        axios.get(`/user?userName=${userName}&pwd=${pwd}`)
            .then(response => {
                dispatch(changeRouteView(routes.HOME));
                dispatch(setUserCatalog(response.data));
                user = userName;
                pass = pwd;
            })
            .catch(error => {
                // console.log(error);
                toast.error(error.response.data, {position: toast.POSITION.BOTTOM_RIGHT});
            });
    }
}

export function postUser(userName, pwd) {
    return (dispatch) => {
        axios.post(`/user`,{
            userName,
            pwd,
            catalog:[]
        })
            .then(response => {
                dispatch(changeRouteView(routes.HOME));
                dispatch(setUserCatalog(response.data.catalog));
                user = userName;
                pass = pwd;
            })
            .catch(error => {
                // console.log(error);
                toast.error(error.response.data, {position: toast.POSITION.BOTTOM_RIGHT});
            });
    }
}

export function getBookInfo(index) {
    return (dispatch) => {
        axios.get(`/books/${index}`)
            .then(response => {
                dispatch(changeRouteView(routes.BOOK));
                dispatch(setBookInfo(response.data));
            })
            .catch(error => {
                // console.log(error);
                toast.error(error.response.data,"Couldn't get Book info!\n" + error);
            });
    }
}

export function postBookToCatalog(book) {
    return (dispatch) => {
        axios.post(`/user/${user}/catalog`, book)
            .then(response => {
                dispatch(updateUserCatalog(user, pass));
                toast.success(response.data, {position: toast.POSITION.BOTTOM_RIGHT});
            })
            .catch(error => {
                // console.log(error.response);
                toast.error(error.response.data, {position: toast.POSITION.BOTTOM_RIGHT});
            });
    }
}

export function removeBookFromCatalog(book) {
    return (dispatch) => {
        axios.delete(`/user/${user}/catalog/${book.book_number}`)
            .then(response => {
                dispatch(updateUserCatalog(user, pass));
                toast.success(`Successfully removed book ${book.title} from your catalog`, {position: toast.POSITION.BOTTOM_RIGHT});
            })
            .catch(error => {
                // console.log(error);
                toast.error(error.response.data, {position: toast.POSITION.BOTTOM_RIGHT});
            });
    }
}

function changeRouteView(changedRoute) {
    return {
        type: middlewareActions.CHANGE_ROUTE,
        payload: changedRoute
    }
}

function setBooksList(booksData) {
    return {
        type: middlewareActions.GET_ALL_BOOKS,
        payload: booksData
    }
}

function setBookInfo(bookInfo) {
    return {
        type: middlewareActions.SHOW_BOOK_DETAILS,
        payload: bookInfo
    }
}

function setUserCatalog(books) {
    return {
        type: middlewareActions.ADD_BOOK_TO_USER_CATALOG,
        payload: books
    }
}