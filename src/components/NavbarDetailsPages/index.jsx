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
      </nav>






    </>

  )
}

export default NavbarDetailsPages