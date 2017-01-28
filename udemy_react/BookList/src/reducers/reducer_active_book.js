/* jshint -W104 */
/* jshint -W117 */
/* jshint -W119 */

// State argument is not application state, only that state that
// this reducer is responsible for
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    
    return state;
}
