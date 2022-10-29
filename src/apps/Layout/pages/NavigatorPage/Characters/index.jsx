import React from 'react'
import CharacterCard from "../../../components/CharacterCard"

import {charactersList} from "../../../../../utils/charactersList"

import cls from './Characters.module.scss'
import characterImg from '../../../../../assets/images/characterProfile.png'


const Characters = () => {
  return (
    <>
      <div className={cls.root}>
        <div className={cls.moreCharacter}>
          <div className={cls.card}>
            <div className={cls.cardContainer}>
              <div className={cls.profileImg}>
                <img src={characterImg} alt="character img"/>
              </div>
              <div className={cls.about}>
                <h2>Doko friends</h2>
                <div className={cls.aboutObj}>
                  <div className={cls.location}>
                    <span className={cls.key}>Location</span>
                    <span className={cls.value}>Neo-Seoul</span>
                  </div>
                  <div className={cls.year}>
                    <span className={cls.key}>Year</span>
                    <span className={cls.value}>2111</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cls.listCharacterContainer}>
          <ul className={cls.listCharacter}>
            {
              charactersList.map(character => (
                <CharacterCard
                  key={character.id}
                  location={character.location}
                  profileImg={character.image}
                  year={character.year}
                />
              ))
            }
          </ul>
        </div>

        <span className={cls.next}>
          <span>NEXT</span>
          <pre>-></pre>
        </span>
      </div>
    </>
  )
}

export default Characters
