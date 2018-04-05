import React, {Component} from 'react';

class BooksList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showBookInfo: false,
            bookIndex: 0,
            booksData: [],
            bookToShow: 50
        };

        this.showBookInfo = this.showBookInfo.bind(this);
        this.moreBooks = this.moreBooks.bind(this);
    }

    componentDidMount() {
        this.props.middleware.getBooksList();
    }


    showBookInfo(evt, data, index) {
        this.props.middleware.getBookInfo(index);
    }

    moreBooks(){
        this.setState({bookToShow: this.state.bookToShow+50});
    }

    render() {
        let grid = [];
        if (this.props.books && this.props.books.length !== 0) {
            for (let i = 0; i < this.state.bookToShow; i++) {
                grid.push(<li key={"grid-" + i} className={"grid-item"}
                              onClick={e => this.showBookInfo(e, this.props.books[i], i+1)}
                >
                    {this.props.books[i].title}
                </li>);
            }
        }
        return (
            <div className="animated fadeInLeft">
                <h2>Our Books Collection:</h2>
                <ul className={"books-list"}>
                    {grid}
                </ul>
                <button type="button" className="btn btn-info" onClick={this.moreBooks} id="moreBooks">Show More Books</button>
            </div>
        );
    }


}

export default BooksList;
