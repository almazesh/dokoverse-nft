import React from 'react'
import {partnersList} from "../../../../../utils/partnersList"

import cls from './Partners.module.scss'

const Partners = () => {
  return (
    <>
      <div className={cls.root}>
        <div className={cls.description}>
          <p>
            Founded by a famous K Pop Producer, singer, and songwriter alongside a team of NFT, Blockchain, marketing,
            artistic, community, and creative experts from over 7 countries and 10 nationalities.
          </p>
        </div>
        <div className={cls.partners}>
          <div className={cls.partnersContainer}>
            <ul className={cls.partnersList}>
              {
                partnersList.map(partner => (
                  <li key={partner.id}>
                    <img src={partner.image} alt="partner img"/>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <span className={cls.next}>
          <span>NEXT</span>
          <pre>-></pre>
        </span>
      </div>

    </>
  )
}

export default Partners
