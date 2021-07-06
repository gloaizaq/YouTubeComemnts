import React from "react";

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    };

    parseYouTubeURL(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : false;
    }

    onSubmit = (event) => {
        event.preventDefault();
        const videoId = this.parseYouTubeURL(this.state.searchTerm);
        this.props.onSearchSubmit(videoId);
    }

    renderVideoURL() {
        if (this.props.videoId.length) {
            return (
                <div className="ui basic segment">
                    <label>URL: </label>
                    <a target="_blank" rel="noreferrer" href={this.props.videoId}>
                        {this.props.videoId}
                    </a>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="ui basic segment">
                <div className="ui grid">
                    <div className="six wide column">
                        <form className="ui action left icon input" onSubmit={this.onSubmit}>
                            <i className="search icon"></i>
                            <input
                                type="text"
                                placeholder="Video URL"
                                value={this.state.searchTerm}
                                onChange={(e) => this.setState({ searchTerm: e.target.value })}
                            />
                            <button type="submit" className="ui teal button">Search</button>
                        </form>
                    </div>
                    <div className="ten wide column">
                        {this.renderVideoURL()}
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;