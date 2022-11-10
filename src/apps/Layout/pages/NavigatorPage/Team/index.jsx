import React from 'react'
import TeamPersonCard from "../../../components/TeamPersonCard"

import cls from './Team.module.scss'
import teamBanner from '../../../../../assets/images/teamPeople.png'
import {teamList} from "../../../../../utils/teamList"


const Team = () => {
  return (
    <>
      <div className={cls.root}>
        <section className={cls.teamBanner}>
          <img src={teamBanner} alt="team banner"/>
        </section>
        <section className={cls.teamList}>
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
        <span className={cls.next}>
          <span>NEXT</span>
          <pre>-></pre>
        </span>
      </div>

    </>
  )
}

export default Team
