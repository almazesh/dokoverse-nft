import React from 'react'
import {useNavigate} from "react-router"

import cls from './Roadmap.module.scss'
import {BsArrowRightShort} from "react-icons/bs"

const Roadmap = () => {
  const navigate = useNavigate()

  return (
    <div className={cls.container}>
      <div className={cls.root}>
        <h2
          className={cls.heading}>ROADMAP</h2>

        <div className={cls.parent}>
          <div className={cls.left}>
            <div
              className={cls.div1}
              onClick={() => navigate('foundation')}
            >
              <div className={cls.container}>
                <h2>01</h2>
                <span>The Foundation <BsArrowRightShort/></span>
              </div>
            </div>
          </div>
          <div className={cls.right}>

            <div
              className={cls.div2}
              onClick={() => navigate('expansion')}
            >
              <div className={cls.container}>
                <h2>02</h2>
                <span>The Expansion <BsArrowRightShort/></span>
              </div>
            </div>
            <div
              className={cls.div3}
              onClick={() => navigate('longevity')}
            >
              <div className={cls.container}>
                <h2>03</h2>
                <span>
                  <span>Longevity</span>
                  <BsArrowRightShort/></span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Roadmap
