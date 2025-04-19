import React, { useEffect, useRef, useState } from 'react'
import { IoIosClose, IoIosSearch } from "react-icons/io";
import styles from './index.module.scss'
import Link from 'next/link';
import { useMenu } from '@/contexts/MenuContext';
import { useRouter } from 'next/router';
import { TfiWorld } from 'react-icons/tfi';
import { motion } from 'framer-motion';


const NavbarDetailsPages = ({ imgsrc, dir, dataAllLangs, stieName, dataPreliminaries, dataAllSettings, slug, sec_color }) => {
  const { menulang, setMenuLang, topicsMenu, setTopicsMenu } = useMenu();
  const { locale } = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter()
  const bookLink = dataAllSettings?.book_link;
  const searchRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);


  return (

    <>

      <nav id='navbar' className={styles.navbar} dir={dir}>
        <div className={styles.bg_contaienr}>
          <img src={imgsrc} alt="" />
        </div>
        <div className={styles.sec_container}>
          <div className="container">
            <div className={styles.wrapper} style={{ position: 'relative' }}>
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
                <Link className={styles.btn} href={bookLink} target='_blanked'>
                  <img src='/assets/svgs/book.svg' alt='' />
                </Link>

                <div className={styles.btn} onClick={() => setTopicsMenu(prev => !prev)}>
                  <img src='/assets/svgs/boxes.svg' alt='' />
                </div>
              </div>


              {isSearchOpen &&
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  ref={searchRef}
                  className={styles.search}>
                  <div className={styles.input_container}>

                    <input type="text" />
                    <div className={styles.icon_container}>
                      <IoIosSearch />
                    </div>

                  </div>
                </motion.div>
              }
            </div>

          </div>

        </div>
      </nav>




      {menulang &&
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5 }} className={styles.menu_container} dir={dir}>
          <div className={styles.menu_nav}>
            <div className={styles.close_btn} onClick={() => setMenuLang(false)}>
              <IoIosClose />
            </div>

            <div className={styles.langs}>
              <TfiWorld />

            </div>
          </div>
          <ul>

            {Object.entries(dataAllLangs).map(([code, language]) => (

              <li key={code}>
                <a href={`/${code}${router.asPath}`} className="box">
                  <p>{language?.native}</p>
                  <div className={`${styles.circle} ${code === locale && styles.active}`} />
                </a>
              </li>
            ))}

          </ul>
        </motion.div>
      }


      {topicsMenu &&
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5 }} className={styles.topic_menu_container} dir={dir}>
          <div className={styles.menu_nav}>
            <div className={styles.close_btn} onClick={() => setTopicsMenu(false)}>
              <IoIosClose />
            </div>
          </div>

          <ul>
            {dataPreliminaries?.posts?.map((box, index) => (

              <li className={`${styles.box_container} ${slug === box.slug && styles.active}`} key={index} onClick={() => setTopicsMenu(false)}>
                <Link href={`/preliminaries/${box.slug}`} className={`${styles.box} `}>
                  <div className={styles.icon_container}>
                    <img src={box.icon} alt={box.title} />
                  </div>
                  <p>{box?.title}</p>
                </Link>


              </li>


            ))}
          </ul>
        </motion.div>
      }

      {(menulang || topicsMenu) &&
        <div className={styles.layer} onClick={() => { setMenuLang(false), setTopicsMenu(false) }} />
      }
    </>

  )
}

export default NavbarDetailsPages