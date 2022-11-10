import React, {useState} from 'react'
import {navigation} from "../../../../utils/navigation"
import {useNavigate} from "react-router"
import Dropdown from "../Dropdown"
import LangOrShareDropdown from "../LangOrShareDropdown"
import {LangList, SharingList} from "../../../../utils/headersLists"

import {ReactComponent as DropdownIcon} from "../../../../assets/images/dropdownIcon.svg"
import {ReactComponent as Logo} from '../../../../assets/images/dokLogo.svg'
import {ReactComponent as TextLogo} from "../../../../assets/images/textLogo.svg"
import {ReactComponent as ShareIcon} from "../../../../assets/images/share.svg"
import {ReactComponent as WebIcon} from "../../../../assets/images/web.svg"

import cls from './Header.module.scss'


const Header = () => {
  const navigate = useNavigate()
  const [isActiveShare, setIsActiveShare] = useState(false)
  const [isActiveLang, setIsActiveLang] = useState(false)
  const [isActiveDropdown, setIsActiveDropdown] = useState(false)
  const [isMercantileActive, setIsMercantileActive] = useState(false)

  return (
    <>
    <div className={cls.background}>
      <div className="container">
        <div className={cls.root}>
          <div
            className={cls.logo}
            onClick={() => navigate('/')}
          >
            <div className={cls.mainLogo}>
              <Logo/>
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
              <li
                className={`${isMercantileActive ? cls.mercantile : ''}`}
                onClick={() => setIsMercantileActive(prev => !prev)}
              >{isMercantileActive ? 'Sequence Initializing...' : 'The Mercantile'}</li>
            </ul>
          </div>
          <div className={cls.contacts}>
            <div className={cls.share}>
              <ShareIcon
                onClick={() => {
                  setIsActiveShare(prev => !prev)
                  setIsActiveLang(() => false)
                }}
              />
              <LangOrShareDropdown
                list={SharingList}
                isActive={isActiveShare}
                isLanguage={false}
                setIsActive={setIsActiveShare}
              />
            </div>
            <div className={cls.lang}>
              <WebIcon
                onClick={() => {
                  setIsActiveLang(prev => !prev)
                  setIsActiveShare(() => false)
                }}
              />
              <LangOrShareDropdown
                isActive={isActiveLang}
                list={LangList}
                isLanguage={true}
                setIsActive={setIsActiveLang}
              />
            </div>
          </div>
          <div className={cls.dropdown}>
            <DropdownIcon
              onClick={() => setIsActiveDropdown(prev => !prev)}
            />
          </div>
        </div>
      </div>
    </div>


      <div>
        <Dropdown
          isActive={isActiveDropdown}
          setIsActive={setIsActiveDropdown}
          navigationList={navigation}
          shareList={SharingList}
          langList={LangList}
        />
      </div>
    </>
  );
};

export default Header;
