import React, { Component, PropTypes } from 'react';

class YouTubeWindow extends Component {
  render() {
    const url = `https://www.youtube.com/embed/${this.props.youtubeUri}`;
    return <iframe width="350" height="250" src={ url } frameBorder="0" allowFullscreen></iframe>;
  }
}

YouTubeWindow.propTypes = {
  youtubeUri: PropTypes.string
};

export default YouTubeWindow;
