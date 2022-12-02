import React from 'react'
import {useNavigate} from "react-router"

import cls from './Roadmap.module.scss'
import {BsArrowRightShort} from "react-icons/bs"
import Character1 from "../../../../assets/images/characterProfile2.png";
import Character2 from "../../../../assets/images/characterProfile3.png";
import  Character3 from "../../../../assets/images/characterProfile4.png";


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
                <div className={cls.title}>
                  <h2>01</h2>
                  <span>The Foundation <BsArrowRightShort/></span>
                </div>
                <div className={cls.character}>
                  <img src={Character1} alt="character"/>
                </div>
              </div>
            </div>
          </div>
          <div className={cls.right}>

            <div
              className={cls.div2}
              onClick={() => navigate('expansion')}
            >
              <div className={cls.container}>
                <div className={cls.title}>
                  <h2>02</h2>
                  <span>The Expansion <BsArrowRightShort/></span>
                </div>
                <div className={cls.character}>
                  <img src={Character2} alt="character"/>
                </div>
              </div>
            </div>
            <div
              className={cls.div3}
              onClick={() => navigate('longevity')}
            >
              <div className={cls.container}>
               <div className={cls.title}>
                 <h2>03</h2>
                 <span>
                  <span>Longevity</span>
                  <BsArrowRightShort/>
                </span>
               </div>
                <div className={cls.character}>
                  <img src={Character3} alt="character"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Roadmap
