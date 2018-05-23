import React, {Component} from 'react';
import { Player } from 'video-react';

export default class SocialVideo extends Component {
  render() {
    return (

      <Player
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />

    );
  }
}
