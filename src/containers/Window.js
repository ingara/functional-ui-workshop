import React, { PropTypes, } from 'react';
import {
  ClosedWindow,
  TextWindow,
  ImageWindow,
  SpotifyWindow,
  YouTubeWindow
} from '../components';
import { connect } from 'react-redux';
import { AppActions } from '../actions';
import { windowTypes } from '../constants';

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

function Window({ window }) {
  const windowComponent = window.opened ?
    getOpenWindow(window) :
    <ClosedWindow
      onClick={ () => console.log(`Closed window ${window.day} clicked!`) }
      text={ window.day } />;

  return (
    <div className="window">
      { windowComponent }
    </div>
  );
}

Window.propTypes = {
  window: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default Window;
