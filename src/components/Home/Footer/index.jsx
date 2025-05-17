import React, { useState, useRef, useEffect } from 'react';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import HowTo from '../HowTo';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
  FaTiktok,
  FaGithub,
  FaPhone
} from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { useMenu } from '@/contexts/MenuContext';

const Footer = ({
  dataPostWudoo,
  dataPostPray,
  dataAllLangs,
  dataAllSettings,
  dir,
  dataAllWords,
  dataSettings
}) => {
  const { setMenuLang } = useMenu();
  const router = useRouter();
  const currentLocale = router.locale || 'ar';

  const year = new Date().getFullYear();

  const formatYear = (year, locale) => {
    if (locale === 'ar') {
      return year.toString().replace(/\d/g, d =>
        '٠١٢٣٤٥٦٧٨٩'[d]
      );
    }
    return year;
  };


  const socialPlatforms = [
    { key: 'link_facebook', Icon: FaFacebook },
    { key: 'link_twitter', Icon: FaTwitter },
    { key: 'link_instagram', Icon: FaInstagram },
    { key: 'link_youtube', Icon: FaYoutube },
    { key: 'link_telegram', Icon: FaTelegram },
    { key: 'link_whatsapp', Icon: FaWhatsapp },
    { key: 'link_tiktok', Icon: FaTiktok },
    { key: 'link_github', Icon: FaGithub },

  ];

  return (
    <>
      <div className="mobile">
        <HowTo
          dataPostWudoo={dataPostWudoo}
          dataAllSettings={dataAllSettings}
          dir={dir}
          dataPostPray={dataPostPray}
        />
      </div>

      <footer id="footer" className={styles.footer} dir={dir}>

        <div className={styles.logo_container}>
          <div className="container">
            <div className={styles.logo}>
              <img
                src={dataAllSettings?.site_logo}
                alt={dataAllSettings?.site_name}
              />
              <h5>{dataAllSettings?.site_name}</h5>
            </div>
          </div>
        </div>

        <div className={styles.links_container}>
          <div className="container">
            <div className={styles.sec_container}>
              {/*Sections */}
              <Link href={'/sections'} className={styles.sec}>
                <div className={styles.sec_title}>
                  <h5>{dataAllWords?.sections || 'Sections'}</h5>
                </div>

              </Link>
              {/*Preliminaries */}
              <Link href={'/preliminaries'} className={styles.sec}>
                <div className={styles.sec_title}>
                  <h5>{dataAllWords?.preliminaries || 'Sections'}</h5>
                </div>

              </Link>
              {/* Contact us */}
              <div className={`${styles.sec} ${styles.contact}`}>
                <div className={styles.sec_title}>
                  <h5>{dataAllWords?.contact_us || 'Contact Us'}</h5>
                </div>




                <div className={styles.social}>
                  {socialPlatforms.map(({ key, Icon }) => {
                    const url = dataSettings?.[key];
                    if (!url) return null;
                    return (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon />
                      </a>
                    );
                  })}
                  {dataSettings?.phone && (
                    <a href={`tel:${dataSettings.phone}`}>
                      <FaPhone />
                    </a>
                  )}
                  {dataSettings?.phone2 && (
                    <a href={`tel:${dataSettings.phone2}`}>
                      <FaPhone />
                    </a>
                  )}



                  {dataSettings?.email && (
                    <>
                      <a
                        href={`mailto:${dataSettings.email}`}
                        title={`Send email to ${dataSettings.email}`}
                        style={{ marginRight: '10px', fontSize: '1.5em' }}
                      >
                        <IoMdMail />
                      </a>
                    </>
                  )}

                </div>

              </div>
              {/* Langs */}
              <div className={`${styles.sec} ${styles.cursor}`} onClick={() => setMenuLang(true)}>
                <div className={styles.sec_title}>
                  <h5>{dataAllWords?.languages || 'Languages'}</h5>
                </div>
              </div>
              {/* Store */}
              <Link href={'/preliminaries'} className={styles.sec}>
                <div className={styles.sec_title}>
                  <h5>{dataAllWords?.store || 'Store'}</h5>
                </div>

              </Link>
            </div>

            <div className={styles.bottom}>
              <p>
                {dataAllWords.about_us}
              </p>

              <div className={styles.copy}>
                <p>{dataAllWords?.footer_desc2}  {formatYear(year, currentLocale)}</p>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
