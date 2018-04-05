import React, {Component} from 'react';

class UserCatalog extends Component {

    componentDidMount(){
        this.props.middleware.updateUserCatalog();
    }

    removeBook = (evt, book) =>{
        this.props.middleware.removeBookFromCatalog(book);
    };

    render() {
        return (
            <div className="animated slideInUp catalog">
                <h1 className="infoHead">User Catalog:</h1>
                {this.props.userCatalog.map((book, i) => {
                    return <li key={"userGrid-" + i}
                               className={"catalog-item"}
                    >
                        {this.props.userCatalog[i].title}
                        <button type="button" className="btn btn-danger" id="removeButton" onClick={e => this.removeBook(e, this.props.userCatalog[i])}>Remove</button>
                    </li>
                })}
            </div>

        );
    }
}

export default UserCatalog;
