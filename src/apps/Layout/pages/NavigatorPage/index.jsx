import React, {useState} from 'react'
import Characters from "./Characters"
import Manifesto from "./Manifesto"
import Team from "./Team";
import Partners from "./Partners"

import VideoBg from "../../../../assets/videos/dokoverse.mp4"
import cls from './NavigatorPage.module.scss'

const navigations = [
  {
    id: 0,
    title: 'Manifesto',
    component: <Manifesto/>
  },
  {
    id: 1,
    title: 'Characters',
    component: <Characters/>

  },
  {
    id: 2,
    title: 'team',
    component: <Team/>

  },
  {
    id: 3,
    title: 'partners',
    component: <Partners/>

  },
]

const NavigatorPage = () => {
  const [activeComponentIdx, setActiveComponentIdx] = useState(null)
  const componentObj = navigations[activeComponentIdx]

  return (
    <>
      <div className={cls.root}>
        <video
          src={VideoBg}
          loop
          muted
          autoPlay
        />
        <div className={cls.navigationContainer}>
          <ul className={cls.navigationList}>
            {
              navigations.map((nav, idx) => (
                <li
                  key={nav.id}
                  onClick={() => setActiveComponentIdx(idx)}
                  className={`${idx === activeComponentIdx ? cls.active : ''}`}
                >
                  {nav.title}
                </li>
              ))
            }
          </ul>
        </div>

        <div className={cls.laptop}>
          {
            componentObj ? componentObj.component : ''
          }
        </div>

        <ul className={cls.mobile}>
          {
            navigations.map(item => (
              <li key={item.id}>
                <div className={cls.heading}>
                  <h2>{item.title}</h2>
                </div>
                {item.component}
              </li>
            ))
          }
        </ul>

      </div>
    </>
  )
}

export default NavigatorPage
