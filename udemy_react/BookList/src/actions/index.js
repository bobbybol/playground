/* jshint -W104 */
/* jshint -W117 */
/* jshint -W119 */

export function selectBook(book) {
    // selectBook is an ActionCreators, it needs to return an action,
    // an object with a type property (2 properties, type & payload)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}