import React, { useEffect, useRef, useState } from 'react'
import { IoIosClose, IoIosSearch } from "react-icons/io";
import styles from './index.module.scss'
import Link from 'next/link';
import { useMenu } from '@/contexts/MenuContext';
import { useRouter } from 'next/router';
import { TfiWorld } from 'react-icons/tfi';
import { motion } from 'framer-motion';


const NavbarDetailsPages2 = ({ dir, dataAllLangs, stieName, dataPreliminaries, dataAllSections, dataAllSettings, slug, }) => {
  const { menulang, setMenuLang, topicsMenu, setTopicsMenu } = useMenu();
  const { locale } = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter()
  const bookLink = dataAllSettings?.book_link;
  const searchRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  const highlightText = (text) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span
          key={index}
          style={{
            fontWeight: "bold",
            textDecoration: "underline",
            color: "orange",
          }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <>
      <nav id='navbar' className={styles.navbar} dir={dir}>
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

              {/* 
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
              } */}




            </div>

          </div>

        </div>
      </nav>

      {/* {isSearchOpen &&
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5 }} className={styles.menu_container} dir={dir}>
          <div className={styles.menu_nav}>
            <div className={styles.close_btn} onClick={() => setIsSearchOpen(false)}>
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
      } */}
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.menu_container}
          dir={dir}
        >
          <div className={styles.menu_nav}>
            <div className={styles.close_btn} onClick={() => setIsSearchOpen(false)}>
              <IoIosClose />
            </div>

            <div className={styles.langs}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className={styles.search_input_wrapper}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.search_input}
                />

                <div className={styles.icon_container}>
                  <IoIosSearch />
                </div>
              </motion.div>
            </div>
          </div>

          <ul>
            {/* filter sections */}
            {dataAllSections
              ?.filter((section) =>
                section.name?.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((section) => (
                <li key={`section-${section.id}`}>
                  <Link href={`/section/${section.slug}`} className="box">
                    <p>{highlightText(section.name)}</p>
                  </Link>
                </li>
              ))}

            {/* filter preliminaries */}
            {dataPreliminaries?.posts
              ?.filter((post) =>
                post.title?.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((post) => (
                <li key={`preliminary-${post.id}`}>
                  <Link href={`/preliminaries/${post.slug}`} className="box">
                    <p>{highlightText(post.title)}</p>
                  </Link>
                </li>
              ))}
          </ul>
        </motion.div>
      )}



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

      {(menulang || topicsMenu || isSearchOpen) &&
        <div className={styles.layer} onClick={() => { setMenuLang(false), setTopicsMenu(false), setIsSearchOpen(false) }} />
      }
    </>

  )
}

export default NavbarDetailsPages2