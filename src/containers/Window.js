import React, { PropTypes, } from 'react';
import { connect } from 'react-redux';
import {
  ClosedWindow,
  TextWindow,
  ImageWindow,
  SpotifyWindow,
  YouTubeWindow
} from '../components';
import { windowTypes } from '../constants';

import { AppActions } from '../actions';

function getOpenWindow(window) {
  const { content, type } = window;
  switch (type) {
  case windowTypes.IMAGE:
    return <ImageWindow url={ content } />;
  case windowTypes.SPOTIFY:
    return <SpotifyWindow spotifyUri={ content } />;
  case windowTypes.YOUTUBE:
    return <YouTubeWindow youtubeUri={ content } />;
  case 'text':
  default:
    return <TextWindow content={ content } />;
  }
}

function Window({ window, openWindow }) {
  const windowComponent = window.opened ?
    getOpenWindow(window) :
    <ClosedWindow
      onClick={ () => openWindow(window.day) }
      text={ window.day } />;

  return (
    <div className="window">
      { windowComponent }
    </div>
  );
}

Window.propTypes = {
  window: PropTypes.object.isRequired,
  openWindow: PropTypes.func.isRequired
};

export default connect(null, { openWindow: AppActions.openWindow })(Window);
