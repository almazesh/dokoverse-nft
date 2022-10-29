import React from 'react'
import {partnersList} from "../../../../../utils/partnersList"

import cls from './Partners.module.scss'

const Partners = () => {
  return (
    <>
      <div className={cls.root}>
        <div className={cls.description}>
          <p>
            Doko (도코) is a South Korean singer, songwriter, composer and producer of C9 Entertainment.He is a member of
            the mixed duo Poetic Narrator.
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
