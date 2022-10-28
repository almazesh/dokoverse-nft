import React, {useState} from 'react'
import cls from './Dropdown.module.scss'
import {ReactComponent as Logo} from '../../../../assets/images/textLogo.svg'
import {useNavigate} from "react-router"
import {ReactComponent as WebIcon} from '../../../../assets/images/web.svg'
import {ReactComponent as ShareIcon} from '../../../../assets/images/share.svg'

const Dropdown = (
  {
    isActive,
    setIsActive,
    navigationList,
    shareList,
    langList
  }
) => {
  const navigate = useNavigate()
  const [isActiveLang, setIsActiveLang] = useState(false);
  const [isActiveShare, setIsActiveShare] = useState(false);

  return (
    <div
      className={`${cls.root} ${isActive ? cls.active : ''}`}
    >
      <div className={cls.container}>
        <div className={cls.logo}>
          <Logo onClick={() => {
            navigate('/')
            setIsActive(false)
          }}/>
          <span
            onClick={() => setIsActive(prev => !prev)}
          >&times;</span>
        </div>
        <ul className={cls.navigationList}>
          {
            navigationList.map(item => (
              <li
                key={item.key}
                onClick={() => {
                  setIsActive(false)
                  navigate(item.path)
                }}
              >{item.title}</li>
            ))
          }
        </ul>

        <div className={cls.contacts}>
          <div className={cls.lang}>
            <div
              onClick={() => setIsActiveLang(prev => !prev)}
            >
              <WebIcon/>
              <span>English</span>
            </div>
            <ul className={`${cls.languageDropdown} ${isActiveLang ? cls.active : ''}`}>
              {
                langList.map(item => (
                  <li
                    key={item.id}
                    onClick={() => setIsActiveLang(prev => !prev)}
                  >
                    {item.title}
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={cls.social}>
            <div
              onClick={() => setIsActiveShare(prev => !prev)}
            >
              <ShareIcon/>
              <span>Soc.networks</span>
            </div>

            <ul className={isActiveShare ? cls.active : ''}>
              {
                shareList.map(item => (
                  <li
                    key={item.id}
                    onClick={() => setIsActiveShare(prev => !prev)}
                  >
                    {
                      <item.icon/>
                    }
                    {
                      item.title
                    }
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Dropdown
