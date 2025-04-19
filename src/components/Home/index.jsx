import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Sections from './sections'
import Sections2 from './sections2'
import Footer from './Footer';
import styles from './index.module.scss'
import NavbarDetailsPages2 from '../NavbarDetailsPages2'
import { useSiteData } from "@/contexts/SiteDataContext";

const Home = () => {

  const {
    dataPostWudoo,
    dataAllSettings,
    dataAllCategories,
    dataAllWords,
    dataPreliminaries,
    dataPostPray
  } = useSiteData();
  const dir = dataAllSettings?.dir;

  return (
    <>
      {/* <Navbar dataAllLangs={dataAllLangs} dataAllSettings={dataAllSettings} dir={dir} dataPreliminaries={dataPreliminaries} /> */}
      <div id={styles.home}>
        <Hero dataAllWords={dataAllWords} dataAllSettings={dataAllSettings} dataAllCategories={dataAllCategories} dir={dir} dataPreliminaries={dataPreliminaries} />
        <Sections dataPreliminaries={dataPreliminaries} dataAllSettings={dataAllSettings} dataAllWords={dataAllWords} dir={dir} />
        <Sections2 dataPostPray={dataPostPray} dataPostWudoo={dataPostWudoo} dataAllCategories={dataAllCategories} dataAllSettings={dataAllSettings} dir={dir} dataPreliminaries={dataPreliminaries} />

      </div>

    </>
  )
}

export default Home