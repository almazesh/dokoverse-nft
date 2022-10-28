import React from 'react'
import cls from './Roadmap.module.scss'
import {BsArrowRightShort} from "react-icons/bs"
import {useNavigate} from "react-router"

const Roadmap = () => {
  const navigate = useNavigate()

  return (
    <div className={cls.container}>
      <div className={cls.root}>
        <h2
          className={cls.heading}>ROADMAP</h2>
        <div className={cls.parent}>
          <div
            className={cls.div1}
            onClick={() => navigate('foundation')}
          >
            <div className={cls.container}>
              <h2>01</h2>
              <span>The Foundation <BsArrowRightShort/></span>
            </div>
          </div>
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
              <span>Longevity <BsArrowRightShort/></span>
            </div>
          </div>
          <div
            className={cls.div4}
            onClick={() => navigate('metaverse-universe')}
          >
            <div className={cls.container}>
              <h2>04</h2>
              <span>Metaverse Universe <BsArrowRightShort/></span>
            </div>
          </div>
          <div
            className={cls.div5}
            onClick={() => navigate('community')}
          >
            <div className={cls.container}>
              <h2>05</h2>
              <span>Community <BsArrowRightShort/></span>
            </div>
          </div>
          <div
            className={cls.div6}
            onClick={() => navigate('metaverse')}
          >
            <div className={cls.container}>
              <h2>06</h2>
              <span>Metaverse <BsArrowRightShort/></span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Roadmap
