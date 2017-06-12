import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
           return this.props.books.map((book) => {
              return ( 
                <li 
                key={book.title}
                onClick= {() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
                </li>
              ); 
           }); 
        }
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}


function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of BookList container.
    return {
        books: state.books
    }
}


// Anything returned from this function will end up as props on the BookList container.
// In our case we are returning selectBook. So selectBook will be added to props and can be accessed like
// this.props.selectBook
function mapDispatchToProps(dispatch){
    // When ever selectBook is called the result should be passed to all of our reducers
    return bindActionCreators({selectBook:selectBook}, dispatch);
}

// Promote BookList from a component to a container- it need to know about the this new dispatch methid, selectBook.
// Make it availabe as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);