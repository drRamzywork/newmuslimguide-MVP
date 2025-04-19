import React from 'react'
import styles from './index.module.scss'

const NavbarDetailsPagesSections = ({ imgsrc, title, layerBg }) => {



  return (
    <>
      {/* <nav id='navbar' className={styles.navbar} dir={dir}>

        <div className="container">
          <div className={styles.sec_container}>
            <Link href={'/'} className={styles.logo}>
              <img src="/assets/svgs/logo.svg" alt="" />
              <h1>{stieName}</h1>
            </Link>

            <div className={styles.btns_container}>
              <div className={styles.btn} onClick={() => setMenuLang(true)}>
                <p>{locale}</p>
              </div>

              <div className={styles.btn} onClick={() => setIsSearchOpen(prev => !prev)}>
                <IoIosSearch />
              </div>
              <Link href={bookLink} target='_blanked' className={styles.btn}>
                <img src='/assets/svgs/book.svg' alt='' />
              </Link>
              <div className={styles.btn} onClick={() => setTopicsMenu(prev => !prev)}>
                <img src='/assets/svgs/boxes.svg' alt='' />
              </div>
            </div>
          </div>
        </div>
      </nav> */}


      <div className={styles.title_container}>
        <div className={styles.layer_bg} style={{ backgroundColor: layerBg }} />
        <h2>{title}</h2>
      </div>

      <div className={styles.bg_contaienr}>
        <img src={imgsrc} alt="" />
        <div className="desktop">
          <img src={imgsrc} alt="" className={styles.layer_img} />
        </div>
      </div>







    </>
  )
}

export default NavbarDetailsPagesSections