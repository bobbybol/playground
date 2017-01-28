/* jshint -W117 */
/* jshint -W104 */
/* jshint -W119 */

/**
 * THE MAIN APP COMPONENT
 */

// Import Modules
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Import Components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Constants & Variables
const API_KEY = 'AIzaSyALR2w-2iJPFxJ9NvCFIQRuX8W4oPMTK7U';

// Create Component
class App extends Component { 
    constructor(props) {
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null
        };
        
        this.videoSearch('surfboards');
    }
    
    videoSearch(term) {
        // Search Youtube
        YTSearch(
            // Options
            {
                key: API_KEY,
                term: term
            },
            // Callback
            (data) => {
                this.setState({
                    videos: data,
                    selectedVideo: data[0]
                });
            }
        );
    }
    
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        
        
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}></SearchBar>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} 
                />
            </div>
        );
    }
};

// Put it on the Page
ReactDOM.render(<App></App>, document.querySelector('.container'));