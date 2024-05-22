import React, { useState } from 'react';
import './Describe.css';
import ReactPlayer from 'react-player';
import video from '../assets/The Vets - Bringing Pet Care Home _ TV Commercial by Filmkraft.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

function Describe(props) {
  const { leftsideHead, leftsidePara, reverse } = props;
  const [playing, setPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    if (playing) {
      setShowButton(false);
    }
  };

  return (
    <div className={`describe ${reverse ? 'reverse' : ''}`} id='about'>
      <div className="leftSide"> 
        <h2>{leftsideHead}</h2>
        <p>{leftsidePara}</p>
        <button className='ourService'>Our Service</button>
      </div>
      <div className="rightSide">
        <div 
          className="video-container" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <ReactPlayer
            url={video}
            playing={playing}
            controls={false}
            width="100%"
            height="auto"
            style={{position: 'relative', right: 39}}
            className='videoForthis'
          />
          {showButton && (
            <button className="play-button" onClick={togglePlay}>
              <FontAwesomeIcon icon={playing ? faPause : faPlay} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Describe;
