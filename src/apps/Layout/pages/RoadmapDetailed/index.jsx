import React from 'react';
import {useNavigate, useParams} from "react-router"

import {modalText, modalTitle} from '../../../../utils/modalTexts'

import cls from './RoadmapDetailed.module.scss'

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
            <ul>
              {
                modalText[category].map(item => (
                  <li key={item.id}>
                    <h5><span>-</span>{item.title}</h5>
                    {item.description && <p><span>&#9675;</span>{item.description}</p>}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadmapDetailed
