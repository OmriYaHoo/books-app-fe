import React, {Component} from 'react';

class BookInfo extends Component {

    addBook = () => {
        this.props.middleware.postBookToCatalog(this.props.bookData);
    };

    render() {
        return (
            <div className="animated fadeIn single-book">
                <h1 className="infoHead">Book Info</h1>
                <ul className="bookInfoList">
                    <li>
                        <b>Title:</b> {this.props.bookData.title}
                    </li>
                    <li>
                        <b>Description:</b> {this.props.bookData.description}
                    </li>
                    <li>
                        <b>ISBN Number:</b> {this.props.bookData.isbn}
                    </li>
                    <li>
                        <b>Author:</b> {this.props.bookData.author}
                    </li>
                    <li>
                        <b>Publication Date:</b> {this.props.bookData.publication_date}
                    </li>
                    <li>
                        <b>Genre:</b> {this.props.bookData.genre}
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
