import React, {Component} from 'react';

class BookInfo extends Component {

    addBook = () => {
        this.props.middleware.postBookToCatalog(this.props.bookData);
    };

    render() {
        return (
            <div className="animated zoomIn single-book">
                <h1 className="infoHead">Book Info</h1>
                <ul className="bookInfoList">
                    <li>
                        <b>Title:</b> {this.props.bookData.title}
                    </li>
                    <li>
                        <b>Release Year:</b> {this.props.bookData.release_year}
                    </li>
                    <li>
                        <b>Category:</b> {this.props.bookData.category}
                    </li>
                    <li>
                        <b>Price:</b> {this.props.bookData.price}$
                    </li>
                </ul>
                <div className="buttonHolder">
                    <button type="button" className="btn btn-primary" id="addButton" onClick={this.addBook}>Add</button>
                </div>
            </div>

        );
    }
}

export default BookInfo;
