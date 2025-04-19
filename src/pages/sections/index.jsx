import Navbar from '@/components/Navbar'
import React from 'react'
import styles from './index.module.scss';
import { useMenu } from '@/contexts/MenuContext';
import { motion } from 'framer-motion';
import { useSiteData } from '@/contexts/SiteDataContext';
import Head from 'next/head';

const Sections = () => {
  const {
    // dataPostWudoo,
    dataAllSettings,
    dataAllLangs,
    // dataAllCategories,
    dataAllWords,
    dataPreliminaries,
    dataAllSections
  } = useSiteData();

  const { menulang, setMenuLang, } = useMenu();
  const dir = dataAllSettings?.dir;
  const test = dataAllSections.filter(obj => obj.slug !== "preliminaries")
  // const test = (dataAllSections || []).filter(obj => obj.slug !== "preliminaries")

  const imagePath = '/logo.png';
  const siteURL = process.env.NEXT_PUBLIC_APP_DOMAIN;
  const stieName = dataAllSettings?.site_name;
  const topicTitle = dataAllWords?.preliminaries;
  const siteDescrription = dataAllSettings.site_description;

  return (
    <>
      <Head>
        <title>{`${stieName} | ${topicTitle}`} </title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content="" />
        <link rel="icon" type="image/ico" href={`/${imagePath}`} />
        <meta name="theme-color" content="#cd5827" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="application-name" content={dataAllSettings?.site_name} />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={dataAllSettings?.site_name} />
        <link rel="apple-touch-icon" href={`${siteURL}/${imagePath}`} />
        <link rel="apple-touch-startup-image" href={`${siteURL}/${imagePath}`} />
        <meta name="author" content={dataAllSettings?.site_name} />
        <meta name="description" content={siteDescrription} />
        <link rel="canonical" href={`${siteURL}/`} />
        <meta name="msapplication-TileColor" content="#cd5827" />
        <meta name="msapplication-TileImage" content={`${siteURL}/${imagePath}`} />
        <meta name="msapplication-square70x70logo" content={imagePath} />
        <meta name="msapplication-square150x150logo" content={imagePath} />
        <meta name="msapplication-wide310x150logo" content={imagePath} />
        <meta name="msapplication-square310x310logo" content={imagePath} />
        <link rel="apple-touch-icon-precomposed" href={imagePath} />
        <meta property="og:type" content="website" />

        <meta property="og:site_name" content={dataAllSettings?.site_name} />
        <meta property="og:locale" content="ar" />
        <meta property="og:locale:alternate" content="ar" />
        <meta property="og:url" content={`${siteURL}/`} />
        <meta property="og:title" content={`${stieName} | ${topicTitle}`} />
        <meta property="og:description" content={siteDescrription} />
        <meta property="og:image" content={`${siteURL}/${imagePath}`} />
        <meta itemProp="name" content={`${stieName} | ${topicTitle}`} />
        <meta itemProp="author" content={dataAllSettings?.site_name} />
        <meta itemProp="image" content={`${siteURL}/${imagePath}`} />
        <meta itemProp="description" content={siteDescrription} />
        <meta name="twitter:image" content={`${siteURL}/${imagePath}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content={`${stieName} | ${topicTitle}`} />
        <meta name="twitter:image:src" content={`${siteURL}/${imagePath}`} />
        <meta name="twitter:description" content={siteDescrription} />
      </Head>
      <Navbar dataAllLangs={dataAllLangs} dataAllSettings={dataAllSettings} dir={dir} />
      <section id='preliminaries' className={styles.preliminaries} dir={dir}>
        <div className="container">

          <div className={styles.sec_contaienr}>
            <div className={styles.sec_title}>
              <h2>{dataAllWords?.sections}</h2>
            </div>

            <div className={styles.boxes_container}>

              {test?.map((post, idx) => (
                <a key={idx} href={`/section/${post.slug}`} className={styles.box}>
                  <div className={styles.img_container}>
                    <img src={post.cover} alt={post?.name} />
                  </div>



                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 1 }}
                    transition={{ duration: 0.5 }} className={styles.title}>
                    <p>{post.name}</p>
                  </motion.div>
                </a>
              ))}



            </div>
          </div>

        </div>

      </section>

      {menulang &&
        <div className={styles.layer} onClick={() => setMenuLang(false)} />
      }
    </>
  )
}

export default Sections