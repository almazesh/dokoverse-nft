import React, {useState} from 'react'
import cls from './Header.module.scss'
import Logo from '../../../../assets/images/dokoLog.png'
import {ReactComponent as TextLogo} from "../../../../assets/images/textLogo.svg"
import {ReactComponent as ShareIcon} from "../../../../assets/images/share.svg"
import {ReactComponent as WebIcon} from "../../../../assets/images/web.svg"
import {navigation} from "../../../../utils/navigation"
import {useNavigate} from "react-router"
import {ReactComponent as DropdownIcon} from "../../../../assets/images/dropdownIcon.svg"
import {ReactComponent as ShareListIcon1} from "../../../../assets/images/shareListItem1.svg"
import {ReactComponent as ShareListIcon2} from "../../../../assets/images/shareListItem2.svg"
import Dropdown from "../Dropdown"
import LangOrShareDropdown from "../LangOrShareDropdown"

const SharingList = [
  {
    id: 0,
    icon: ShareListIcon1,
    title: 'opensea'
  },
  {
    id: 1,
    icon: ShareListIcon2,
    title: 'opensea'
  },
  {
    id: 2,
    icon: ShareListIcon1,
    title: 'opensea'
  },
  {
    id: 3,
    icon: ShareListIcon2,
    title: 'opensea'
  },
]

const LangList = [
  {
    id: 0,
    title: 'en'
  },
  {
    id: 1,
    title: 'ko'
  },
  {
    id: 2,
    title: 'fr'
  },
  {
    id: 3,
    title: 'es'
  },
]


const Header = () => {
  const navigate = useNavigate()
  const [isActiveShare, setIsActiveShare] = useState(false)
  const [isActiveLang, setIsActiveLang] = useState(false)
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);

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
      <div
      >
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
