// import React from 'react';
// import styles from './index.module.scss';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import HowTo from '../HowTo';
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaYoutube,
//   FaTelegram,
//   FaWhatsapp,
//   FaTiktok,
//   FaGithub,
//   FaPhone
// } from 'react-icons/fa';

// const Footer = ({
//   dataPostWudoo,
//   dataPostPray,
//   dataAllLangs,
//   dataAllCategories,
//   dataAllSettings,
//   dir,
//   dataAllWords
// }) => {
//   const router = useRouter();
//   const currentLocale = router.locale || 'ar';
//   const currentLang = dataAllLangs[currentLocale]?.native;

//   // Social platforms mapping
//   const socialPlatforms = [
//     { key: 'link_facebook', Icon: FaFacebook },
//     { key: 'link_twitter', Icon: FaTwitter },
//     { key: 'link_instagram', Icon: FaInstagram },
//     { key: 'link_youtube', Icon: FaYoutube },
//     { key: 'link_telegram', Icon: FaTelegram },
//     { key: 'link_whatsapp', Icon: FaWhatsapp },
//     { key: 'link_tiktok', Icon: FaTiktok },
//     { key: 'link_github', Icon: FaGithub }
//   ];

//   return (
//     <>
//       <div className="mobile">
//         <HowTo
//           dataPostWudoo={dataPostWudoo}
//           dataAllSettings={dataAllSettings}
//           dir={dir}
//           dataPostPray={dataPostPray}
//         />
//       </div>

//       <footer id="footer" className={styles.footer} dir={dir}>

//         <div className={styles.logo_container}>
//           <div className="container">
//             <div className={styles.logo}>
//               <img
//                 src={dataAllSettings?.site_logo}
//                 alt={dataAllSettings?.site_name}
//               />
//               <h5>{dataAllSettings?.site_name}</h5>
//             </div>
//           </div>
//         </div>

//         <div className={styles.links_container}>
//           <div className="container">
//             <div className={styles.sec_container}>

//               {/* Sections */}
//               <div className={styles.sec}>
//                 <div className={styles.sec_title}>
//                   <h5>{dataAllWords?.sections || 'Sections'}</h5>
//                 </div>
//                 <ul>
//                   {dataAllCategories?.map((sec, idx) => (
//                     <li key={idx}>
//                       <Link
//                         href={
//                           sec.slug === 'preliminaries'
//                             ? '/preliminaries'
//                             : `/section/${sec.slug}`
//                         }
//                       >
//                         <p>{sec.name}</p>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Languages Dropdown */}
//               <div className={styles.sec}>
//                 <div className={styles.sec_title}>
//                   <h5>{dataAllWords?.languages || 'Languages'}</h5>
//                 </div>
//                 <div className={styles.lang_dropdown}>
//                   <button type="button">{currentLang}</button>
//                   <ul>
//                     {Object.entries(dataAllLangs).map(([code, language]) => (
//                       <li key={code}>
//                         <Link href={router.asPath} locale={code}>
//                           {language.native}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* Social & Contact */}
//               <div className={styles.sec}>
//                 <div className={styles.sec_title}>
//                   <h5>{dataAllWords?.contact || 'Contact Us'}</h5>
//                 </div>
//                 <div className={styles.social}>
//                   {socialPlatforms.map(({ key, Icon }) => {
//                     const url = dataAllSettings?.[key];
//                     if (!url) return null;
//                     return (
//                       <a
//                         key={key}
//                         href={url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Icon />
//                       </a>
//                     );
//                   })}
//                   {dataAllSettings?.phone && (
//                     <a href={`tel:${dataAllSettings.phone}`}>
//                       <FaPhone />
//                     </a>
//                   )}
//                   {dataAllSettings?.phone2 && (
//                     <a href={`tel:${dataAllSettings.phone2}`}>
//                       <FaPhone />
//                     </a>
//                   )}
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;


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

const Footer = ({
  dataPostWudoo,
  dataPostPray,
  dataAllLangs,
  dataAllCategories,
  dataAllSettings,
  dir,
  dataAllWords,
  dataSettings
}) => {
  const router = useRouter();
  const currentLocale = router.locale || 'ar';
  const currentLang = dataAllLangs[currentLocale]?.native;

  // Language dropdown state
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  // Social platforms mapping
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

              {/* Sections */}
              <div className={styles.sec}>
                <div className={styles.sec_title}>
                  <h5>{dataAllWords?.sections || 'Sections'}</h5>
                </div>
                <ul>
                  {dataAllCategories?.map((sec, idx) => (
                    <li key={idx}>
                      <Link
                        href={
                          sec.slug === 'preliminaries'
                            ? '/preliminaries'
                            : `/section/${sec.slug}`
                        }
                      >
                        <p>{sec.name}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages Dropdown */}
              <div className={styles.sec} ref={langRef}>
                <div className={styles.sec_title}>
                  <h5>{dataAllWords?.languages || 'Languages'}</h5>
                </div>
                <div className={styles.lang_dropdown}>
                  <button
                    type="button"
                    onClick={() => setLangOpen(prev => !prev)}
                  >
                    {currentLang}
                  </button>
                  {langOpen && (
                    <ul>
                      {Object.entries(dataAllLangs).map(([code, language]) => (
                        <li key={code}>
                          <Link href={router.asPath} locale={code}>
                            {language.native}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Social & Contact */}
              <div className={styles.sec}>
                <div className={styles.sec_title}>
                  <h5>{dataAllWords?.contact || 'Contact Us'}</h5>
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
                  {/* {dataSettings?.email && (
                    <a href={`mailto:${dataSettings.email}`} title="Send email">
                      <IoMdMail />
                    </a>
                  )} */}


                  {dataSettings?.email && (
                    <>
                      {/* mailto link (opens default client, if available) */}
                      <a
                        href={`mailto:${dataSettings.email}`}
                        title={`Send email to ${dataSettings.email}`}
                        style={{ marginRight: '10px', fontSize: '1.5em' }}
                      >
                        <IoMdMail />
                      </a>

                      {/* fallback Gmail compose link */}
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${dataSettings.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open Gmail to send email"
                        style={{ fontSize: '1.5em' }}
                      >
                        <IoMdMail />
                      </a>
                    </>
                  )}

                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
