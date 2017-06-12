// We added books reducer(BooksReducer) to out combineReducers. 
// This combineReducers is going to add the key to our global application state called books
// Any key added to combineRecuers ends up as a key to global state

import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'
const rootReducer = combineReducers({
   books: BooksReducer,
   activeBook: ActiveBook
});

export default rootReducer;
