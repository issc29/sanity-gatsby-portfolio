import React, { useEffect, useState } from "react";
import 'react-h5-audio-player/lib/styles.css';
import { PlayIcon, PauseIcon } from "@heroicons/react/solid";
import ReactPlayer from 'react-player'
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import { MdForward10 } from "@react-icons/all-files/md/MdForward10";
import { MdReplay10 } from "@react-icons/all-files/md/MdReplay10";
import { isMobile } from 'react-device-detect';


const AudioPlayerCustom = (props) => {
  const player = React.useRef()
  const title = React.useRef();
  const [playMarquee, setPlayMarquee] = useState(false);
  const [scrollDistance, setScrollDistance] = useState("0px");
  const trackId = props.Track.id || ""

  const triggerMarquee = (title) => {
    const { current } = title

    if(current.scrollWidth > current.offsetWidth) {
      const currentScrollDistance = `-${current.scrollWidth -  current.offsetWidth}px`

      if(scrollDistance == currentScrollDistance) {
        console.log("Scroll Distance is equal")
        setPlayMarquee(true)
          const timeoutId = window.setTimeout(() => {
            setPlayMarquee(false);
          }, 6000);

      } else {
        setScrollDistance(currentScrollDistance)
      }
      
 
  }

  }

  useEffect(() => {
    console.log("a")
    setPlayMarquee(true)
      const timeoutId = window.setTimeout(() => {
        setPlayMarquee(false);
      }, 6000);
  }, [scrollDistance])

  useEffect(() => {
    if(props.play) {
      player.current.audio.current.play()
      props.setPlay(false)
     }
  }, [props.Track])

  return (
    <>
      <div
        className="fixed left-0 bottom-0 min-w-full z-10 bg-dark-blue" >
        <div className="relative h-full w-full sm:flex text-center sm:text-left">
          <div key={props.Track.id} className="flex flex-col md:p-4 p-1 text-white sm:w-[300px] whitespace-nowrap overflow-hidden">
            <div className={`${(playMarquee) ? `animate-marquee [--scroll-distance: ${scrollDistance}]` : ''} `}
              onMouseEnter={() => triggerMarquee(title)}
              ref={title}
            >{props.Track.title}</div>
            <div className="text-xs">{props.Track.artist}</div>
          </div>

          <AudioPlayer
            autoPlay={false} 
            autoPlayAfterSrcChange={false}
            src={(props.Track.linkWithTime) ? props.Track.linkWithTime : props.Track.link}
            showJumpControls={true} 
            progressJumpSteps={{backward: 10000, forward: 10000 }}
            volume=".5"
            onListen={e => props.setAudioTime(e.target.currentTime)}
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
                ... (isMobile) ? [] : [RHAP_UI.VOLUME],
              ]
            }
            customIcons={{
              rewind: <MdReplay10/>,
              forward: <MdForward10/> 
            }}
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
