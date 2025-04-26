export async function getStaticPaths() {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
  try {
    const res = await fetch(`${apiDomain}/all-slug?withChildren=2`, {
      method: 'GET',
      headers: {
        'locale': 'ar',
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch slugs: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();


    if (!data || !data.data || !Array.isArray(data.data)) {
      throw new Error('Invalid API response format');
    }

    const paths = data.data.map((item) => {
      if (!item.slug || typeof item.slug !== 'string') {
        console.error('Invalid slug item:', item);
        throw new Error(`Invalid slug in response: ${JSON.stringify(item)}`);
      }
      return {
        params: { id: item.slug },
      };
    });


    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error.message);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}

export async function getStaticProps({ params, locale }) {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
  const { id } = params;

  // Fetch data in the same sequential manner as v1
  const resPreliminaries = await fetch(`${apiDomain}/preliminaries`, {
    headers: { "locale": locale },
  });
  const dataPreliminaries = await resPreliminaries.json();

  const resCategories = await fetch(`${apiDomain}/categories`, {
    headers: { "locale": locale },
  });
  const dataAllSections = await resCategories.json();

  const resPost = await fetch(`${apiDomain}/post/${id}`, {
    headers: { "locale": locale },
  });
  const dataPost = await resPost.json();

  return {
    props: {
      dataAllSections: dataAllSections?.data || [],
      sectionData: dataPost?.data || null,
      dataPreliminaries: dataPreliminaries?.data[0] || {},
    },
    revalidate: 10,
  };
}
import Head from 'next/head';
import NavbarDetailsPages from '@/components/NavbarDetailsPages';
import { useRouter } from 'next/router';
import PreliminariesDetailsPagesSection from '@/components/PreliminariesDetailsPagesSection';
import { useSiteData } from '@/contexts/SiteDataContext';



const Preliminar = ({
  sectionData,
  dataAllSections,
  dataPreliminaries
}) => {
  const {
    // dataPostWudoo,
    dataAllSettings,
    dataAllLangs,
    // dataAllCategories,
    dataAllWords,
    // dataPreliminaries,
    // dataAllSections
  } = useSiteData();


  const topicTitle = sectionData?.title;
  const topicImg = sectionData?.image;
  const imagePath = '/logo.png';
  const imagePathSvg = '/logo.svg';
  const siteURL = process.env.NEXT_PUBLIC_APP_DOMAIN;
  const dir = dataAllSettings?.dir;
  const stieName = dataAllSettings?.site_name;
  const stieImage = sectionData?.image;
  const description = sectionData?.body;
  const plainText = description?.replace(/<\/?[^>]+(>|$)/g, "");
  const { query } = useRouter();
  const slug = query?.id;

  const main_color = sectionData.category.main_color;
  const sec_color = sectionData.category.second_color || '#000000';
  const parent_name = sectionData.category?.name || '';
  const parent_slug = sectionData.category?.slug || '';


  return (
    <>
      <Head>
        <title>{`${stieName} | ${topicTitle}`}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="csrf-token" content="JdDvDc4LUJomFM4T7QE0hFlH9CeKOHDXMoxV3wer" />
        <meta name="title" content="" />
        <link rel="icon" type="image/png" href={`${imagePath}`} />
        <link rel="icon" type="image/svg+xml" href={`${imagePathSvg}`} />
        <meta name="theme-color" content={main_color} />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="application-name" content={stieName} />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={stieName} />
        <link rel="apple-touch-icon" href={`${siteURL}/${imagePath}`} />
        <link rel="apple-touch-startup-image" href={`${siteURL}/${imagePath}`} />
        <meta name="author" content={stieName} />
        <meta name="description" content={plainText} />
        <link rel="canonical" href={`${siteURL}/`} />
        <meta name="msapplication-TileColor" content={main_color} />
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
        <meta property="og:url" content={`${siteURL}/`} />
        <meta property="og:title" content={`${stieName} | ${topicTitle}`} />
        <meta property="og:description" content={plainText} />
        <meta property="og:image" content={stieImage} />
        <meta itemProp="name" content={`${stieName} | ${topicTitle}`} />
        <meta itemProp="author" content={stieName} />
        <meta itemProp="image" content={`${stieImage}`} />
        <meta itemProp="description" content={plainText} />
        <meta name="twitter:image" content={`${stieImage}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content={`${stieName} | ${topicTitle}`} />
        <meta name="twitter:image:src" content={`${stieImage}`} />
        <meta name="twitter:description" content={plainText} />
      </Head>

      <NavbarDetailsPages
        slug={slug}
        dataAllSettings={dataAllSettings}
        dataPreliminaries={dataPreliminaries}
        imgsrc={topicImg}
        dir={dir}
        dataAllLangs={dataAllLangs}
        stieName={stieName}
      />
      <PreliminariesDetailsPagesSection
        sec_color={sec_color}
        parent_slug={parent_slug}
        parent_name={parent_name}
        sectionData={sectionData} dir={dir} main_color={main_color} topicTitle={topicTitle} dataAllWords={dataAllWords} />


    </>
  );
};

export default Preliminar;
