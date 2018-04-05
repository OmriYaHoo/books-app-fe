import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './App.css';
import 'animate.css'
import Footer from "./components/Footer";
import BookInfo from "./components/BookInfo";
import BooksList from "./components/BooksList";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import About from "./components/About";
import UserCatalog from "./components/UserCatalog";
import * as actions from './redux/actions/actionTypes';
import * as routes from './redux/actions/routes';
import * as serverCalls from './redux/actions/booksApiCalls';
import {ToastContainer} from "react-toastify";
import LoginPage from "./components/LoginPage";

class App extends Component {

    constructor() {
        super();

        this.changePage = this.changePage.bind(this);
    }

    changePage(evt, view) {
        evt.preventDefault();
        this.props.actions.changeRoute(view);
    }

    getRoute = () => {
        let div;

        switch (this.props.routes.route) {
            case(routes.BOOK): {
                div = <BookInfo
                    changePage={this.changePage}
                    bookData={this.props.books.bookInfo}
                    middleware={this.props.middleware}
                />;
                break;
            }
            case(routes.USER_CATALOG): {
                div = <UserCatalog userCatalog={this.props.books.userCatalog}

                                   middleware={this.props.middleware}/>;
                break;
            }
            case(routes.ABOUT): {
                div = <About/>;
                break;
            }
            default: {
                div = <BooksList changePage={this.changePage}
                                 middleware={this.props.middleware}
                                 books={this.props.books.booksList}
                />;
                break;
            }
        }

        return div;
    };

    isLoggedIn = () => {
        let div;
        if (this.props.routes.route !== routes.LOGIN) {
            let page = this.getRoute();
            div = <div className={"App"}>
                <nav className="animated slideInDown navbar navbar-dark bg-primary">
                    <a className="navbar-brand" href="" onClick={(e) => this.changePage(e, routes.HOME)}>Home</a>
                    <a className="navbar-brand" href="" onClick={(e) => this.changePage(e, routes.USER_CATALOG)}>My
                        Catalog</a>
                    <a className="navbar-brand" href="" onClick={(e) => this.changePage(e, routes.ABOUT)}>About</a>
                    <a className="navbar-brand" href="" onClick={(e) => this.changePage(e, routes.LOGIN)}>Logout</a>
                </nav>
                {page}
            </div>
        } else {
            div = <LoginPage
                middleware={this.props.middleware}
            />

        }
        return div;
    };


    render() {
        let div = this.isLoggedIn();
        return (
            <div className={"App-bg"}>
                {div}
                <Footer/>
                <ToastContainer autoClose={5000}/>
            </div>

        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        routes: state.routeReducer,
        books: state.booksReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        middleware: bindActionCreators(serverCalls, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
