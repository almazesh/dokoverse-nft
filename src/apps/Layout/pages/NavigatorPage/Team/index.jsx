import React from 'react'
import cls from './Team.module.scss'
import teamBanner from '../../../../../assets/images/teamPeople.png'
import personProfile from '../../../../../assets/images/teamPersonProfile.png'
import TeamPersonCard from "../../../components/TeamPersonCard"
import teamBg from '../../../../../assets/images/teamBg.png'

const teamList =  [
  {
    id: 0,
    nickname: '@doko_twi',
    about: 'Doko (도코; sometimes stylized in all caps) is a South Korean singer-songwriter under C9 Entertainment and PIG Entertainment.',
    profileImg: personProfile
  },
  {
    id: 1,
    nickname: '@doko_twi',
    about: 'Doko (도코; sometimes stylized in all caps) is a South Korean singer-songwriter under C9 Entertainment and PIG Entertainment.',
    profileImg: personProfile
  },
  {
    id: 2,
    nickname: '@doko_twi',
    about: 'Doko (도코; sometimes stylized in all caps) is a South Korean singer-songwriter under C9 Entertainment and PIG Entertainment.',
    profileImg: personProfile
  },
  {
    id: 3,
    nickname: '@doko_twi',
    about: 'Doko (도코; sometimes stylized in all caps) is a South Korean singer-songwriter under C9 Entertainment and PIG Entertainment.',
    profileImg: personProfile
  },
  {
    id: 4,
    nickname: '@doko_twi',
    about: 'Doko (도코; sometimes stylized in all caps) is a South Korean singer-songwriter under C9 Entertainment and PIG Entertainment.',
    profileImg: personProfile
  },
  {
    id: 5,
    nickname: '@doko_twi',
    about: 'Doko (도코; sometimes stylized in all caps) is a South Korean singer-songwriter under C9 Entertainment and PIG Entertainment.',
    profileImg: personProfile
  },
  {
    id: 6,
    nickname: '@doko_twi',
    about: 'Doko (도코; sometimes stylized in all caps) is a South Korean singer-songwriter under C9 Entertainment and PIG Entertainment.',
    profileImg: personProfile
  },
  {
    id: 7,
    nickname: '@doko_twi',
    about: 'Doko (도코; sometimes stylized in all caps) is a South Korean singer-songwriter under C9 Entertainment and PIG Entertainment.',
    profileImg: personProfile
  },
]

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
