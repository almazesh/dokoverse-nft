import React from 'react'
import TeamPersonCard from "../../../components/TeamPersonCard"

import cls from './Team.module.scss'
import teamBanner from '../../../../../assets/images/Photo.png'
import {teamList} from "../../../../../utils/teamList"


const Team = () => {
  return (
    <>
      <div className={cls.root}>
        <section className={cls.teamBanner}>
          <img src={teamBanner} alt="team banner"/>
        </section>
        <section className={cls.teamList}>

          <div className={cls.heading}>
            <h2>DOKOVERSE CORE TEAM</h2>

            <p>The DOKOVERSE team has over 20+ people, while the project is Founded by a famous K Pop Producer, singer,
              and songwriter alongside a team of NFT, Blockchain, marketing, artistic, community, and creative experts
              from over 7 countries and 10 nationalities.</p>
          </div>

          <div className={cls.teamListContainer}>
            <ul className={cls.list}>
              {
                teamList.map(person => (
                  <TeamPersonCard
                    key={person.id}
                    profileImg={person.profileImg}
                    about={person.about}
                    nickname={person.nickname}
                    position={person.position}
                  />
                ))
              }
            </ul>
          </div>
        </section>
      </div>

    </>
  )
}

export default Team
