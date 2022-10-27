import React from 'react'
import cls from './LangOrShareDropdown.module.scss'

const LanguageDropdown = (
  {
    isActive,
    list
  }
) => {
  return (
    <div className={`${cls.root} ${isActive ? cls.active : ''}`}>
      <ul className={cls.list}>
        {
          list.map(item => (
            <li key={item.id}>
              {
                <item.icon/>
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default LanguageDropdown
