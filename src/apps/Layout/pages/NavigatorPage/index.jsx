import React from 'react'
import cls from './NavigatorPage.module.scss'
import {Outlet} from "react-router"
import {NavLink} from "react-router-dom";

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

        <Outlet/>
      </div>
    </>
  )
}

export default NavigatorPage
