import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';

const HowTo = ({ dataPostWudoo, dir, dataPostPray }) => {

  return (
    <>
      <section id='how_to' className={styles.how_to} dir={dir}>
        <div className={styles.sec_container}>
          <div className={styles.cards_container}>
            <Link href={`/preliminaries/${dataPostWudoo?.slug}`} className={styles.card}>
              <div className={styles.img_container}>
                {/* <img src="/assets/imgs/Wudoo.png" alt="" /> */}
                <img src={dataPostWudoo.image} alt="" />
              </div>
              <div className={styles.title}>
                <h4>{dataPostWudoo?.title}</h4>
              </div>
            </Link>

            <Link href={`/preliminaries/${dataPostPray?.slug}`} className={styles.card}>

              <div className={styles.img_container}>

                <img src={dataPostPray.image} alt="" />
              </div>
              <div className={styles.title}>
                <h4>{dataPostPray?.title}</h4>
              </div>

              <div className={styles.icon_container}>
                <img src="/assets/svgs/ArrowRight.svg" alt="" />
              </div>
            </Link>

          </div>
        </div>
      </section>
    </>
  )
}

export default HowTo