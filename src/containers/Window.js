import React, { Component, PropTypes, } from 'react';
import { connect } from 'react-redux';
import {
  ClosedWindow,
  TextWindow,
  ImageWindow,
  SpotifyWindow,
  YouTubeWindow
} from '../components';

import { openWindow } from '../actions';

function getWindow(window) {
  const { content, type } = window;
  switch (type) {
  case 'image':
    return <ImageWindow url={ content } />;
  case 'spotify':
    return <SpotifyWindow spotifyUri={ content } />;
  case 'youtube':
    return <YouTubeWindow youtubeUri={ content } />;
  case 'text':
  default:
    return <TextWindow content={ content } />;
  }
}

class Window extends Component {
  render() {
    const { window } = this.props;

    if (window.opened) {
      return <div className="window">{getWindow(window)}</div>;
    }

    return (
      <div className="window">
      <ClosedWindow
        onClick={ () => this.props.openWindow(window.day) }
        text={ window.day } />
        </div>
    );
  }
}

Window.propTypes = {
  window: PropTypes.object.isRequired,
  openWindow: PropTypes.func.isRequired
};

export default connect(() => ({}), { openWindow })(Window);
