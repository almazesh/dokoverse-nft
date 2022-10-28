import React from 'react';
import {useNavigate, useParams} from "react-router"
import cls from './RoadmapDetailed.module.scss'
import { modalText, modalTitle } from '../../../../utils/modalTexts'


const RoadmapDetailed = () => {
  const {category} = useParams()
  const navigate = useNavigate()

  return (
    <div className={cls.container}>
      <div className={cls.root}>
        <h2 className={cls.heading}>ROADMAP</h2>
        <div className={cls.modalContainer}>
        <span
          className={cls.closeModal}
          onClick={() => navigate('/dokovision')}
        >&times;</span>
          <div className={cls.modalWrapper}>
            <h3>{modalTitle[category]}</h3>
            <p>{modalText[category]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadmapDetailed
