/* jshint -W117 */
/* jshint -W104 */
/* jshint -W119 */

/**
 * THE SEARCH BAR COMPONENT
 */

// Import Modules
import React, { Component } from 'react';

// Create Component
class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = { term: '' };
    }
    
    render() {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={e => this.onInputChange(e.target.value)} 
                />
            </div>
        );
    }
    
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

// Export Modules
export default SearchBar;