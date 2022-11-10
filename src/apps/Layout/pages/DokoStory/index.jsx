import React, {useState} from 'react'
import {dokoStory} from "../../../../utils/dokoStory"
import {useNavigate} from "react-router"

import cls from './DokoStory.module.scss'
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"

const DokoStory = () => {
  const navigate = useNavigate()
  const [perPage, setPerPage] = useState({from: 0, to: 2})

  const changePage = (from, to, ascOrDesc) => {

    if (ascOrDesc === '+') {
      setPerPage({
        from: from + 2,
        to: to + 2
      })
    } else {
      setPerPage({
        from: from - 2,
        to: to - 2
      })
    }
  }

  return (
    <div className={cls.container}>
      <div className={cls.root}>
        <ul className={cls.storyList}>
          {
            dokoStory.slice(perPage.from, perPage.to).map(story => (
              <li key={story.id}>
                <div className={cls.text}>
                  <p>
                    {
                      story.description
                    }
                  </p>
                </div>
                <div className={cls.imageContainer}>
                  <story.itemIcon/>
                  <div className={cls.image}>
                    <img src={story.image} alt="story image"/>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
        <div
          className={cls.next}>
          <BsArrowLeftShort
            onClick={() => changePage(perPage.from, perPage.to, '-')}
            className={`${perPage.from === 0 ? cls.disable : ''}`}
          />
          <BsArrowRightShort
            onClick={() => changePage(perPage.from, perPage.to, '+')}
            className={`${perPage.to === dokoStory.length ? cls.disable : ''}`}
          />
        </div>
      </div>
    </div>
  )
}

export default DokoStory


