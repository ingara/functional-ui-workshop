import React, { PropTypes, } from 'react';
import { connect } from 'react-redux';
import {
  ClosedWindow,
  TextWindow,
  ImageWindow,
  SpotifyWindow,
  YouTubeWindow
} from '../components';

import * as Actions from '../actions';

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

function Window({ window, openWindow }) {
  if (window.opened) {
    return <div className="window">{ getWindow(window) }</div>;
  }

  return (
    <div className="window">
      <ClosedWindow
        onClick={ () => openWindow(window.day) }
        text={ window.day } />
    </div>
  );
}

Window.propTypes = {
  window: PropTypes.object.isRequired,
  openWindow: PropTypes.func.isRequired
};

export default connect(() => ({}), { openWindow: Actions.openWindow })(Window);
