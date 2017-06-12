export function selectBook(book) {

    // selectBook is an ActionCreator, it needs to return an action, an object with a type property.
    // Action has two properties: 1) TYPE 2) PAYLOAD
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
     
}