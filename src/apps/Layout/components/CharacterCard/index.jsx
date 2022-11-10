import React from 'react'

import cls from './CharacterCard.module.scss'

const CharacterCard = (
  {
    profileImg,
    location,
    year,
    name
  }
) => {
  return (
    <div className={cls.root}>
      <div className={cls.container}>
        <div className={cls.profileImg}>
          <img src={profileImg} alt="profile img"/>
        </div>
        <div className={cls.aboutObj}>
          <div className={cls.name}>
            <span className={cls.key}>Name</span>
            <span className={cls.value}>{name}</span>
          </div>
          <div className={cls.location}>
            <span className={cls.key}>Location</span>
            <span className={cls.value}>{location}</span>
          </div>
          <div className={cls.year}>
            <span className={cls.key}>Year</span>
            <span className={cls.value}>{year}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
