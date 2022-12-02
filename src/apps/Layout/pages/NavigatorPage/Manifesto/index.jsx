import React from 'react'
import cls from './Manifesto.module.scss'
import ManifestoImg from "../../../../../assets/images/manifestoImg1.png";
import {ReactComponent as Logo} from "../../../../../assets/images/dokLogo.svg"
import {ReactComponent as TextLogo} from "../../../../../assets/images/dokoverseTextIcon.svg";


const Manifesto = () => {
  return (
    <>
      <div className={cls.root}>
        <section className={cls.manifestoContainer}>
          <div className={cls.logo}>
            <Logo/>
          </div>
          <div className={cls.about}>
            <p className={cls.firstDescription}>
              Within the multiverse of space, time, matter, and energy, we find that energy, frequency, and vibration
              express themselves to create the intangible and tangible aspects of existence. Human life is dictated by
              such unforeseen forces; they appear to be so very intangible to the naked eye, yet we constantly feel such
              forces on a daily…
            </p>
            <span className={cls.phrase}>“As above, so below, and as within, so without.”</span>
            <p className={cls.secondDescription}>
              The future of society and our species lies within the present moment, and the choices we collectively
              exude in such moments of ever expanding progression, while having an understanding of our past, and
              direction of where we want to journey unto in the future. Thus, the past, present, and future are all
              connected within one continuum which may be controlled by, or directly control, us; despite society
              becoming more and more reliant upon technological means.
            </p>
            <p className={cls.thirdDescription}>
              DOKOVERSE (in Anurati font) is enabling people to take control of time and energy, by allowing its members
              to express sound and vibration as they wish, while being rewarded for such expressions. Through leveraging
              the power of Korean culture, music, and social influence… DOKOVERSE (in Anurati font) is spreading such a
              message to all citizens of Earth… the revolution is withinside of YOU, while societal adversity may be
              conquered, by one… and shared by all.
            </p>
            <span className={cls.postScript}>We are the many, we are the few, we are the light, we are the chosen… we are…</span>
          </div>
          <div className={cls.textLogo}>
            <TextLogo/>
          </div>
          <div className={cls.image}>
            <img src={ManifestoImg} alt="manifesto"/>
          </div>
        </section>
      </div>
    </>
  )
}

export default Manifesto
