import React, {useState} from 'react'
import Characters from "./Characters"
import Manifesto from "./Manifesto"
import Team from "./Team";
import Partners from "./Partners"

import VideoBg from "../../../../assets/videos/dokoverse.mp4"
import cls from './NavigatorPage.module.scss'
import {BiChevronDown} from "react-icons/bi"

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
  const [activeComponentIdx, setActiveComponentIdx] = useState(0)
  const [isActiveTabSelect, setIsActiveTabSelect] = useState(false);
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
        <div className={cls.container}>
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
        </div>


        {/* Mobile */}

        <div className={cls.mobile}>
          <div className={cls.tabSelect}>
            <div
              className={cls.activeTab}
              onClick={() => setIsActiveTabSelect(prev => !prev)}
            >
              <h3>{componentObj.title}</h3>
              <BiChevronDown/>
            </div>

            <ul className={`${cls.tabList} ${isActiveTabSelect ? cls.active : ''}`}>
              {
                navigations.map(item => (
                  <li
                    key={item.id}
                    className={`${item.id === activeComponentIdx ? cls.active : ''}`}
                    onClick={() => {
                      setActiveComponentIdx(item.id)
                      setIsActiveTabSelect(false)
                    }}
                  >{item.title}</li>
                ))
              }
            </ul>


          </div>

          {
            componentObj && componentObj.component
          }
        </div>

      </div>
    </>
  )
}

export default NavigatorPage

