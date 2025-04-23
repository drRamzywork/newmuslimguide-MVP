import React, { useRef } from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import NavbarDetailsPagesSections from '@/components/NavbarDetailsPagesSections';
import Head from 'next/head';
import { useSiteData } from '@/contexts/SiteDataContext';
import { useRouter } from 'next/router';

const Section = ({
  TopicDetails,
}) => {
  const { locale } = useRouter()
  const {
    dataAllSettings,
    dataAllLangs,
    dataPreliminaries,
  } = useSiteData();

  const sectionRef = useRef(null);
  const dir = dataAllSettings?.dir;



  const topicTitle = TopicDetails?.name;

  const layerBg = TopicDetails?.main_color;
  const imgLayer = TopicDetails?.cover;
  const topicDesc = TopicDetails?.seo_description
  const posts = TopicDetails?.posts;


  const imagePath = '/logo.png';
  const siteURL = process.env.NEXT_PUBLIC_APP_DOMAIN;
  const stieName = dataAllSettings?.site_name;


  const description = TopicDetails.description;
  const plainText = description.replace(/<\/?[^>]+(>|$)/g, "");
  const topicCover = TopicDetails?.cover

  return (
    <>

      <Head>
        <title>{`${stieName} | ${topicTitle}`}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="csrf-token" content="JdDvDc4LUJomFM4T7QE0hFlH9CeKOHDXMoxV3wer" />
        <meta name="title" content="" />
        <link rel="icon" href={`${siteURL}${imagePath}`} />
        <meta name="theme-color" content={layerBg} />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="application-name" content={stieName} />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={stieName} />
        <link rel="apple-touch-icon" href={`${siteURL}${imagePath}`} />
        <link rel="apple-touch-startup-image" href={`${siteURL}/${imagePath}`} />
        <meta name="author" content={stieName} />
        <meta name="description" content={plainText} />
        <link rel="canonical" href={`${siteURL}/`} />
        <meta name="msapplication-TileColor" content={layerBg} />
        <meta name="msapplication-TileImage" content={`${siteURL}/${imagePath}`} />
        <meta name="msapplication-square70x70logo" content={`${siteURL}/${imagePath}`} />
        <meta name="msapplication-square150x150logo" content={`${siteURL}/${imagePath}`} />
        <meta name="msapplication-wide310x150logo" content={`${siteURL}/${imagePath}`} />
        <meta name="msapplication-square310x310logo" content={`${siteURL}/${imagePath}`} />
        <link rel="apple-touch-icon-precomposed" href={`${siteURL}/${imagePath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={stieName} />
        <meta property="og:locale" content="ar" />
        <meta property="og:locale:alternate" content="ar" />
        <meta property="og:url" content={siteURL} />
        <meta property="og:title" content={`${stieName} | ${topicTitle}`} />
        <meta property="og:description" content={plainText} />
        <meta property="og:image" content={topicCover} />
        <meta itemProp="name" content={stieName} />
        <meta itemProp="author" content={stieName} />
        <meta itemProp="image" content={`${topicCover}`} />
        <meta itemProp="description" content={plainText} />
        <meta name="twitter:image" content={`${topicCover}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content={`${stieName} | ${topicTitle}`} />
        <meta name="twitter:image:src" content={`${topicCover}`} />
        <meta name="twitter:description" content={plainText} />
      </Head>

      <NavbarDetailsPagesSections dataAllSettings={dataAllSettings} dataPreliminaries={dataPreliminaries} title={topicTitle} imgsrc={imgLayer} layerBg={layerBg} stieName={stieName} dir={dir} dataAllLangs={dataAllLangs} />

      <section id="sections" className={styles.sections} ref={sectionRef} dir={dir}>
        <div className={styles.sec_container}>

          <div className="container">
            <div className={styles.desc}>
              <p>{plainText}</p>
            </div>


            <div className="mobile">
              <div className={styles.boxes_container}>
                {posts?.map((post, idx) =>
                  <Link locale={locale} href={`/preliminaries/${post?.slug}`} target='_blank' className={styles.box} key={idx}>
                    <div className={styles.img_container}>
                      <img src={post.image} alt="" />
                    </div>

                    <div className={styles.title}>
                      <p>{post?.title}</p>
                    </div>
                  </Link>
                )}
              </div>
            </div>

            <div className="desktop">
              <div className={styles.boxes_container2}>
                {posts.map((box, idx) =>
                  <Link locale={locale} href={`/preliminaries/${box.slug}`} className={styles.box} key={idx}>
                    <div className={styles.img_container}>
                      <img src={box.image} alt={box.title} />
                    </div>

                    <div className={styles.title}>
                      <h4>{box.title}</h4>
                      <ul>
                        {box.children.map((child, index) =>
                          <li key={index} >
                            <span>{child.title}</span>
                          </li>

                        )}
                      </ul>

                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Section;

export async function getStaticProps({ params, locale }) {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
  const { slug } = params;


  const resTopicDetails = await fetch(`${apiDomain}/category/${slug}`, {
    method: 'GET',
    headers: {
      "locale": locale,
    },

  });
  const TopicDetails = await resTopicDetails.json()


  return {
    props: {
      TopicDetails: TopicDetails?.data || [],
    },
    revalidate: 10
  };
}

export async function getStaticPaths({ locale }) {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

  // Fetch all sections from the API
  const resAllSections = await fetch(`${apiDomain}/categories`, {
    headers: {
      'locale': locale
    }
  });
  const dataAllSections = await resAllSections.json();

  // Map the slugs to paths
  const paths = dataAllSections.data.map((item) => ({
    params: { slug: item.slug },
  }));

  // Return the paths
  return {
    paths,
    fallback: 'blocking',
  };
}

