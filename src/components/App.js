import React from 'react';
import { getComments } from '../api/youtube';
import CommentsList from './CommentsList';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = {
    comments: [],
    videoId: ''
  };

  onSearchSubmit = async (searchTerm) => {
    try {
      const result = await getComments(searchTerm);
      this.setState({ 
        comments: result.data.items, 
        videoId: 'https://youtu.be/' + result.data.items[0].snippet.videoId 
      });
    } catch (e) {
      this.setState({ comments: [] });
    }

  }

  render() {
      return (
        <div className="App ui container">
          <SearchBar videoId={this.state.videoId} onSearchSubmit={this.onSearchSubmit} />
          {this.renderCommentListOrEmptyComments()}
        </div>
      );
  }

  renderCommentListOrEmptyComments() {
    if (this.state.comments.length > 0) {
      return <CommentsList comments={this.state.comments} />
    } else {
      return <div>Select a video, just paste the id in the search box</div>
    }
  }
}

export default App;
