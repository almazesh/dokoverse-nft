import React from 'react'
import cls from './Manifesto.module.scss'
import bg from '../../../../../assets/images/manifestoBg.png'

const Manifesto = () => {
  return (
    <>
      <img
        src={bg}
        alt="manifesto bg"
        className={cls.manifestoBg}
      />
      <div className={cls.root}>

        <section className={cls.manifestoContainer}>
        </section>
      </div>
    </>
  )
}

export default Manifesto
