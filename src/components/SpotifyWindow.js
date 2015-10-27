import React, { Component, PropTypes } from 'react';

class SpotifyWindow extends Component {
  render() {
    const url = `https://embed.spotify.com/?uri=${this.props.spotifyUri}`;
    return <iframe src={ url } width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>
  }
}

SpotifyWindow.propTypes = {
  spotifyUri: PropTypes.string
};

export default SpotifyWindow;
