import { useEffect, useRef, useState } from 'react';
import { SpinePlayer } from "@esotericsoftware/spine-player"

const atlasUrl = './assets/Fighter.atlas'
const jsonUrl = './assets/Fighter.json'
const BG = './assets/BG.png'

let spinePlayer: SpinePlayer | undefined;

const SpineAnimation = () => {
  const playerContainerRef = useRef(null);
  // const [ animation, setAnimation ] = useState(false);
  const [ init, setInit ] = useState(false);
  const [ onTimer, setOnTimer ] = useState(false);
  const now = Date.now();
  const nowUTC = new Date(Date.now()+(new Date().getTimezoneOffset()*60000)).getTime();
  const diff = (now - nowUTC) / 3600 / 1000;
  console.log("now",now);
  console.log("nowUTC",nowUTC);
  console.log("Diff hours", diff);

  const syncServer = () => {
    if (init) {
      // spinePlayer?.setAnimation("Idle", true);
    }
  };
  
  const handleStart = () => {
    setOnTimer(false);
    spinePlayer?.setAnimation("Hit1", false);
    spinePlayer?.addAnimation("Idle", true, 0.25);
  };
  const handleEnd = () => {
    
    setOnTimer(true);
    // setTimeout(()=>{
    //   setAnimation(false);
    //   if (init) {
    //     spinePlayer.setAnimation("Idle", true);
    //   }
    // }, 1000)
  };

  useEffect(() => {
    spinePlayer = new SpinePlayer("player-container", {
      jsonUrl: jsonUrl,
      atlasUrl: atlasUrl,
      // jsonUrl: "http://esotericsoftware.com/files/examples/4.1/spineboy/export/spineboy-pro.json",
      // atlasUrl: "http://esotericsoftware.com/files/examples/4.1/spineboy/export/spineboy.atlas",
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
      showControls: false,
      defaultMix: 0,
      // animation: "Idle",
      animations: ["Idle", "Hit1"],
      backgroundImage: {url: BG},
    });
    setInit(true);
  }, []);

  useEffect(() => {
    if (onTimer) {
      const tapTimeout = setTimeout(syncServer, 1500);
    
      return () => {clearTimeout(tapTimeout)};
    }
  }, [onTimer]);
  // useEffect(() => {
    
  // }, [animation, init]);
  
  return (
    <div onTouchStart={handleStart} onTouchEnd={handleEnd}>
      <div id="player-container" ref={playerContainerRef} style={{ width: '100%', height: '100vh' }} />
    </div>

  );
  }
export default SpineAnimation;