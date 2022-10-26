import React from 'react'
import cls from './NavigatorPage.module.scss'
import {Outlet} from "react-router"
import {NavLink} from "react-router-dom";
import Characters from "./Characters";
import Manifesto from "./Manifesto";
import Team from "./Team";
import Partners from "./Partners";

const navigations = [
  {
    id: 0,
    route: '/navigator/manifesto',
    title: 'Manifesto'
  },
  {
    id: 1,
    route: '/navigator/characters',
    title: 'Characters'
  },
  {
    id: 2,
    route: '/navigator/team',
    title: 'team'
  },
  {
    id: 3,
    route: '/navigator/partners',
    title: 'partners'
  },
]

const NavigatorPage = () => {
  return (
    <>
      <div className={cls.root}>
        <div className={cls.navigationContainer}>
          <ul className={cls.navigationList}>
            {
              navigations.map(nav => (
                <NavLink
                  key={nav.id}
                  to={nav.route}
                  className={({isActive}) => isActive ? cls.active : ''}
                >
                  {nav.title}
                </NavLink>
              ))
            }
          </ul>
        </div>

        <section className={cls.manifesto}>
          <div className={cls.heading}>{navigations[0].title}</div>
          <Manifesto/>
        </section>
        <section className={cls.characters}>
          <div className={cls.heading}>{navigations[1].title}</div>
          <Characters/>
        </section>
        <section className={cls.team}>
          <div className={cls.heading}>{navigations[2].title}</div>
          <Team/>
        </section>
        <section className={cls.partners}>
          <div className={cls.heading}>{navigations[3].title}</div>
          <Partners/>
        </section>

        <Outlet/>
      </div>
    </>
  )
}

export default NavigatorPage
