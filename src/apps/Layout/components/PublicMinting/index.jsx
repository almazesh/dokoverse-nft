import React, {useState} from 'react'

import {ReactComponent as MinusIcon} from "../../../../assets/images/minusIcon.svg"
import {ReactComponent as PlusIcon} from "../../../../assets/images/plusIcon.svg"
import cls from "./PublicMinting.module.scss"

const PublicMinting = (
  {
    isMinting,
    setIsConnected,
    isConnected
  }
) => {
  const [counter, setCounter] = useState(0)

  const counterHandler = (sign) => {
    if (sign === '-') {

      if (counter !== 0) {
        setCounter(prev => --prev)
      }
    } else {

      if (counter < 5) {
        setCounter(prev => ++prev)
      }

    }
  }

  return (
    <div className={`${cls.statistics} ${isMinting ? cls.active : ''}`}>
      <div className={cls.heading}>
        <h3>
          PUBLIC SALE
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
            isConnected ? <span className={cls.hash}>0sxkdkfdkf39u42340234u230489</span> : ''
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
                <span>Per Transaction</span>
                <span>Max</span>
                <span>5</span>
              </div>
              <div className={cls.perWallet}>
                <span>Per wallet</span>
                <span>Unlimited</span>
              </div>
              <div className={cls.incrementAndDecrement}>
                <span>Amount</span>
                <div>
                  <MinusIcon
                    onClick={() => counterHandler('-')}
                    className={`${counter === 0 ? cls.disabled : ''}`}
                  />
                  <span>{counter}</span>
                  <PlusIcon
                    onClick={() => counterHandler('+')}
                    className={`${counter === 5 ? cls.disabled : ''}`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={cls.buttonContainer}>
            <button
              disabled={!isConnected}
            >Minting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicMinting;
