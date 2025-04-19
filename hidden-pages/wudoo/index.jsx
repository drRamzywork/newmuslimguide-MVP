import NavbarDetailsPages from '@/components/NavbarDetailsPages'
import React from 'react'
import styles from './index.module.scss';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

const Wudoo = () => {
  return (
    <>
      <NavbarDetailsPages imgsrc={'/assets/imgs/Wudoo.png'} />
      <section id='wudoo' className={styles.wudoo}>
        <div className={styles.title}>
          <div className={styles.links}>
            <Link href={'/'} className={styles.icon_container}>
              <img src="/assets/svgs/home.svg" alt="" />
            </Link>
            <IoIosArrowForward />
            <Link href={'/preliminaries'} className={styles.icon_container}>
              <span>Preliminaries</span>
            </Link>

          </div>

          <h2>How to Perform Wudoo?</h2>


        </div>

        <div className="container">

          <div className={styles.sec_container}>


            <div className={styles.desc}>
              <p>


                <strong>
                  Manner of Performing the partial Ablution (Wudoo’) Performing wudoo’,  </strong> and purification for that matter, is one of the best and most exalted deeds because of which Allah forgives one’s sins. As the Prophet said, “When a Muslim servant [of Allah] washes his face [in the course of performing wudoo], every sin he has committed with his eyes is washed away from his face along with the water; when he washes his hands, every sin his hands have committed is washed away from his hands with the water; when he washes his feet, every sin towards which his feet have walked is washed away with water, with the result that he comes out cleansed of all sins.”(Saheeh Muslim: 244)
                If a Muslim wants to perform wudoo’, he intends to do so for the purpose of offering the prayer but without making a verbal declaration, for the intention is a condition for all acts in Islam. The Prophet ﷺ said, “Actions are but by intentions.” (Saheeh Al-Bukhaaree: 1;Saheeh Muslim: 1907) Then he starts the ablution, washing each part in a continuous manner, without long intervals and in the following sequenc


              </p>


            </div>

          </div>
        </div>

      </section>

    </>
  )
}

export default Wudoo