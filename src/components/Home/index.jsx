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
    dataAllLangs,
    dataAllCategories,
    dataAllWords,
    dataPreliminaries,
    dataAllSections,
    dataPostPray
  } = useSiteData();
  const dir = dataAllSettings?.dir;


  const getPTagContent2 = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const contentElements = doc.querySelectorAll('p, li');
    // Map over NodeList of <p> and <ul> elements to extract their innerHTML
    return Array.from(contentElements).map((element) => {
      const tagName = element.tagName.toLowerCase();
      return `<${tagName}>${element.innerHTML}</${tagName}>`;
    }).join('');
  };


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