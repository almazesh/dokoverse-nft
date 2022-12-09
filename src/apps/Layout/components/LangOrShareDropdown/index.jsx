import React from 'react'

import cls from './LangOrShareDropdown.module.scss'

const LanguageDropdown = (
  {
    isActive,
    list,
    setIsActive,
    isLanguage
  }
) => {

  return (
    <div className={
      `${cls.root} ${isActive ? cls.active : ''} ${isLanguage ? cls.langauge : cls.share}`
    }>
      <ul className={cls.list}>
        {
          list.map(item => (
            <li
              key={item.id}
              onClick={() => setIsActive(false)}
            >
              <a href={item.link} target="_blank">
                {
                  item?.icon
                    ? <item.icon/>
                    : <span>{item.title_laptop}</span>
                }
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default LanguageDropdown
