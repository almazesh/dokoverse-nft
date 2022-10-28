import React from 'react'
import cls from './DokoStory.module.scss'
import {dokoStory} from "../../../../utils/dokoStory"
import {useNavigate} from "react-router";


const DokoStory = () => {
  const navigate = useNavigate()

  return (
    <div className="container dokostory">
      <div className={cls.root}>
        <ul className={cls.storyList}>
          {
            dokoStory.map(story => (
              <li key={story.id}>
                <div className={cls.text}>
                  <p>
                    SOUND and MUSIC are quintessential forces which unify our human collective, however, there is no such
                    thing as perfect musical sound or frequency which enlightens humans upon listening… or is there?
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
          className={cls.next}
          onClick={() => navigate('/dokostory/album')}
        >
          <span>next <pre> -></pre></span>
        </div>
      </div>
    </div>
  )
}

export default DokoStory
