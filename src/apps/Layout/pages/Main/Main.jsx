import React, {useState} from 'react'
import cls from './Main.module.scss'
import VideoBg from '../../../../assets/videos/videoplayback.mp4'
import {ReactComponent as Logo} from "../../../../assets/images/textLogo.svg"
import {ReactComponent as MinusIcon} from "../../../../assets/images/minusIcon.svg"
import {ReactComponent as PlusIcon} from "../../../../assets/images/plusIcon.svg"

const Main = () => {
  const [isMinting, setIsMinting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className={cls.root}>
      <video
        src={VideoBg}
        loop
        muted
        autoPlay
      />
      <div className={`${cls.mainWrapper} ${isMinting ? cls.active : ''}`}>
        <div className={cls.main}>
          <Logo/>
          <button
            onClick={() => setIsMinting(true)}
          >Minting
          </button>
        </div>
        <div className={`${cls.statistics} ${isMinting ? cls.active : ''}`}>
          <div className={cls.heading}>
            <h3>
              {
                !isConnected ? 'PRIVATE SALE' : 'PUBLIC SALE'
              }
            </h3>
            <div>
              <button
                onClick={() => setIsConnected(true)}
                className={`${isConnected ? cls.connected : ''}`}
              >
                {
                  !isConnected ? 'CONNECT WALLET' : 'CONNECTED'
                }
              </button>

              {
                isConnected ? <span>0sxkdkfdkf39u42340234u230489</span> : ''
              }
            </div>

          </div>
          <div className={cls.walletType}>
            <div className={cls.count}>
              <div>
                <span>CURRENT BLOCK</span>
                <span># 0000000</span>
              </div>
              <div>
                <span>MINTING STARTS AT</span>
                <span># 0000000</span>
              </div>
            </div>
            <div className={cls.navigating}>
              <span>OPENSEA</span>
              <span>ETHERSCAN</span>
            </div>
          </div>
          <div className={cls.controlling}>
            <div className={cls.controllingWrapper}>
              <div className={cls.walletData}>
                <span className={cls.title}>PRICE</span>
                <div className={cls.mintingData}>
                  <h2>ETH 100</h2>
                  <div className={cls.max}>
                    <span>Per wallet</span>
                    <span>Max</span>
                    <span>5</span>
                  </div>
                  <div className={cls.incrementAndDecrement}>
                    <span>Amount</span>
                    <div>
                      <MinusIcon/>
                      <span>3</span>
                      <PlusIcon/>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cls.buttonContainer}>
                <button
                  disabled={!isConnected}
                >Minting</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
