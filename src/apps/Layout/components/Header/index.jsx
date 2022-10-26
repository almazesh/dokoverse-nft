import React from 'react'
import cls from './Header.module.scss'
import Logo from '../../../../assets/images/dokoLog.png'
import {ReactComponent as TextLogo} from "../../../../assets/images/textLogo.svg"
import {ReactComponent as ShareIcon} from "../../../../assets/images/share.svg"
import {ReactComponent as WebIcon} from "../../../../assets/images/web.svg"
import {navigation} from "../../../../utils/navigation"
import {useNavigate} from "react-router"
import {ReactComponent as DropdownIcon} from "../../../../assets/images/dropdownIcon.svg"
import Dropdown from "../Dropdown";


const Header = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className={cls.container}>
        <div className={cls.root}>
          <div
            className={cls.logo}
            onClick={() => navigate('/')}
          >
            <div className={cls.mainLogo}>
              <img src={Logo} alt="logo"/>
            </div>
            <div>
              <TextLogo/>
            </div>
          </div>
          <div className={cls.navigation}>
            <ul className={cls.list}>
              {
                navigation.map(item => (
                  <li
                    key={item.key}
                    onClick={() => navigate(item.path)}
                  >{item.title}</li>
                ))
              }
            </ul>
          </div>
          <div className={cls.contacts}>
            <ShareIcon/>
            <WebIcon/>
          </div>
          <div className={cls.connect}>
            CONNECT
          </div>
          <div className={cls.dropdown}>
            <DropdownIcon/>
          </div>
        </div>
      </div>
      <Dropdown/>
    </>
  );
};

export default Header;
