//Description: Youtube embed component, gets width, height and url as props.

//Imports
import React from 'react';
import YouTube from 'react-youtube';

//Types
import { videoType } from '../../types/homepage/Section1Types';


const YouTubeEmbed: React.FC<videoType> = ({ videoId, width, height }) => {
  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeEmbed;
