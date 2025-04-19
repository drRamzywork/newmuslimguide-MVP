import React from 'react'
import styles from './index.module.scss'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useMenu } from '@/contexts/MenuContext';
import HowTo from '../HowTo';
const Footer = ({ dataPostWudoo, dataPostPray, dataAllLangs, dataAllCategories, dataAllSettings, dir, dataAllWords }) => {
  const router = useRouter();

  return (
    <>

      <div className="mobile">
        <HowTo dataPostWudoo={dataPostWudoo} dataAllSettings={dataAllSettings} dir={dir} dataPostPray={dataPostPray} />
      </div>

      <footer id='footer' className={styles.footer} dir={dir}>

        <div className={styles.logo_container}>
          <div className="container">
            <div className={styles.logo}>
              <img src={dataAllSettings?.site_logo} alt={dataAllSettings?.site_name} />

              <h5>{dataAllSettings?.site_name}</h5>
            </div>
          </div>
        </div>


        <div className={styles.links_container}>
          <div className="container">
            <div className={styles.sec_container}>
              <div className={styles.sec}>
                <div className={styles.sec_title}>
                  <h5>{dataAllWords?.sections}</h5>
                </div>
                <ul>
                  {dataAllCategories?.map((sec, idx) => (
                    <li key={idx} >
                      <Link href={sec.slug === "preliminaries" ? "/preliminaries" : `/section/${sec.slug}`}>
                        <p>{sec.name}</p>
                      </Link>
                    </li>
                  ))}


                </ul>
              </div>

              <div className={styles.sec}>
                <ul>

                  {Object.entries(dataAllLangs).map(([code, language]) => (
                    <li key={code}>
                      <a
                        href={`/${code}${router.asPath}`}>{language?.native}
                      </a>
                    </li>
                  ))}

                </ul>





              </div>

            </div>
          </div>
        </div>

      </footer>

    </>

  )
}

export default Footer