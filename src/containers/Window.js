import React, { Component, PropTypes, } from 'react';
import { connect } from 'react-redux';
import {
  ClosedWindow,
  TextWindow,
  ImageWindow,
  SpotifyWindow,
  YouTubeWindow
} from '../components';
// import ClosedWindow from '../components/ClosedWindow';
// import TextWindow from '../components/TextWindow';
// import ImageWindow from '../components/ImageWindow';
// import SpotifyWindow from '../components/SpotifyWindow';
// import YouTubeWindow from '../components/YouTubeWindow';
import { openWindow } from '../actions';

console.log(ClosedWindow);

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
      return getWindow(window);
    }

    return (
      <ClosedWindow
        onClick={ () => this.props.openWindow(window.day) }
        text={ window.day } />
    );
  }
}

Window.propTypes = {
  window: PropTypes.object.isRequired,
  openWindow: PropTypes.func.isRequired
};

export default connect(() => ({}), { openWindow })(Window);
