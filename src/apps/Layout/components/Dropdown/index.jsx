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
          <Logo/>
          <span
            onClick={() => setIsActive(prev => !prev)}
          >&times;</span>
        </div>
        <ul className={cls.navigationList}>
          {
            navigationList.map(item => (
              <li
                key={item.key}
                onClick={() => navigate(item.path)}
              >{item.title}</li>
            ))
          }
        </ul>

        <div className={cls.contacts}>
          <div className={cls.lang}>
            <WebIcon/>
            <span
              onClick={() => setIsActiveLang(prev => !prev)}
            >English</span>
            <ul>
              {
                langList.map
              }
            </ul>
          </div>
          <div className={cls.social}>
            <ShareIcon/>
            <span
              onClick={() => setIsActiveShare(prev => !prev)}
            >Soc.networks</span>

            <ul>
              {

              }
            </ul>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Dropdown
