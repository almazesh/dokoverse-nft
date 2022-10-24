import React from 'react'
import cls from './TeamPerson.module.scss'

const TeamPersonCard = (
  {
    profileImg,
    nickname,
    about
  }
) => {
  return (
    <div className={cls.root}>
      <div className={cls.container}>
        <div className={cls.profile}>
          <img src={profileImg} alt="profile img"/>
        </div>
        <div className={cls.about}>
          <span className={cls.nickname}>{nickname}</span>
          <span className={cls.teamName}>doko</span>
          <p>{about}</p>
        </div>
      </div>
    </div>
  )
}

export default TeamPersonCard
