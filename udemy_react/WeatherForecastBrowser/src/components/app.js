/* jshint -W104 */
/* jshint -W119 */

import React from 'react';
import { Component } from 'react';

import Searchbar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

class App extends Component {
    render() {
        return (
            <div>
                <Searchbar />
                <WeatherList />
            </div>
        );
    }
}

export default App;
