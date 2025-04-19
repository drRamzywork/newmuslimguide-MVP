import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import styles from './index.module.scss'
import { useRouter } from 'next/router';
import { useMenu } from '@/contexts/MenuContext';
import { IoIosClose } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = ({ dataAllLangs, dataAllSettings, dir, dataPreliminaries }) => {
  const router = useRouter();
  const { menulang, setMenuLang, topicsMenu,
    setTopicsMenu,
  } = useMenu();
  const { locale } = useRouter()
  const { pathname } = useRouter()

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const bookLink = dataAllSettings?.book_link || '';
  return (
    <>
      <nav id='navbar' className={styles.navbar} dir={dir}>


      </nav>



    </>
  )
}

export default Navbar