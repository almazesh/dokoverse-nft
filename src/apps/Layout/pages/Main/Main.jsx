import React, {useState} from 'react'
import PrivateMinting from "../../components/PrivateMiniting"
import PublicMinting from "../../components/PublicMinting"

import VideoBg from '../../../../assets/videos/videoplayback.mp4'
import {ReactComponent as Logo} from "../../../../assets/images/textLogo.svg"
import cls from './Main.module.scss'

const Main = () => {
  const [isMinting, setIsMinting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [isPublic] = useState(false)
  const [isVideoShowing, setIsVideoShowing] = useState(false)



  return (
    <>
      {
        isVideoShowing &&
        <div className={cls.modalContainer}>
          <div>
            <iframe
              className={cls.modalVideo}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/X1DUmzaKJYM"
              title="YouTube video player"
              aria-controls={'false'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
            <span
              onClick={() => setIsVideoShowing(false)}
            >&times;</span>
          </div>
        </div>
      }

      <div className={cls.root}>
        <video
          src={VideoBg}
          loop
          muted
          autoPlay
        />
        <span
          className={`${cls.mention} ${isMinting ? cls.disable : ''}`}
          onClick={() => setIsVideoShowing(true)}
        >watch the full video</span>



        {
          !isVideoShowing &&
          <div className="container">
            <div className={`${cls.mainWrapper} ${isMinting ? cls.active : ''}`}>
              <div className={`${cls.main} ${isMinting ? cls.disable : ''}`}>
                <Logo/>
                <button
                  onClick={() => setIsMinting(true)}
                >
                  Minting
                </button>
              </div>

              {
                !isPublic ? (
                  <PrivateMinting
                    isMinting={isMinting}
                    setIsConnected={setIsConnected}
                    isConnected={isConnected}
                  />
                ) : (
                  <PublicMinting
                    isMinting={isMinting}
                    setIsConnected={setIsConnected}
                    isConnected={isConnected}
                  />
                )
              }
            </div>
          </div>
        }
      </div>

    </>
  )
}

export default Main
