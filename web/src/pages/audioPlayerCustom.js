import React from "react";
import 'react-h5-audio-player/lib/styles.css';
import { PlayIcon, PauseIcon } from "@heroicons/react/solid";
import ReactPlayer from 'react-player'

import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";


const AudioPlayerCustom = (props) => {

  const player = React.useRef()
  const trackId = props.Track.id || ""

  console.log(props)

  return (
    <>
    <ReactPlayer
        className='react-player'
        width='100%'
        height='100%'
      />
      <div
        className="fixed left-0 bottom-0 min-w-full z-10 bg-dark-blue" >
        <div className="relative h-full w-full sm:flex text-center sm:text-left">
          <div key={props.Track.id} className="flex flex-col md:p-4 p-1 text-white sm:min-w-[150px] whitespace-nowrap overflow-hidden">
            <div>{props.Track.title}</div>
            <div className="text-xs">{props.Track.artist}</div>
          </div>

          <AudioPlayer
            src={props.Track.link }
            showJumpControls={false} 
            onPlay={e => console.log("onPlay")}
            volume=".5"
            showFilledVolume={true} 
            showDownloadProgress={false}
            customAdditionalControls={[]} 
            customControlsSection={[]}
            customVolumeControls={[]}
            customProgressBarSection={
              [
                RHAP_UI.MAIN_CONTROLS,
                RHAP_UI.CURRENT_TIME,
                RHAP_UI.PROGRESS_BAR,
                RHAP_UI.DURATION,
                RHAP_UI.VOLUME,
              ]
            }
            ref={player}
          />
        </div>
      </div>

    </>
  );
};

AudioPlayerCustom.defaultProps = {
  Track: {},
};


export default AudioPlayerCustom;
