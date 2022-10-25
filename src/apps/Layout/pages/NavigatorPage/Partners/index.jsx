import React from 'react'
import cls from './Partners.module.scss'
import partnerLogo from '../../../../../assets/images/partnersLogo2.png'
import partnersBg from "../../../../../assets/images/partnersBg.png";

const partnersList = [
  {
    id: 0,
    image: partnerLogo
  },
  {
    id: 1,
    image: partnerLogo
  },
  {
    id: 2,
    image: partnerLogo
  },
  {
    id: 3,
    image: partnerLogo
  },
  {
    id: 4,
    image: partnerLogo
  },
  {
    id: 5,
    image: partnerLogo
  },
  {
    id: 6,
    image: partnerLogo
  },
  {
    id: 7,
    image: partnerLogo
  },
  {
    id: 8,
    image: partnerLogo
  },
]

const Partners = () => {
  return (
    <>
      <img
        src={partnersBg}
        alt="team bg"
        className={cls.partnersBg}
      />
      <div className={cls.root}>
        <div className={cls.description}>
          <p>
            Doko (도코) is a South Korean singer, songwriter, composer and producer of C9 Entertainment.He is a member of the mixed duo Poetic Narrator.
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
      </div>

    </>
  )
}

export default Partners
