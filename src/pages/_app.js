import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tajawal, Poppins } from "next/font/google";
import { MenuProvider } from "@/contexts/MenuContext";
import { SiteDataProvider } from "@/contexts/SiteDataContext";
import { useRouter } from "next/router";
import App from "next/app";
import Footer from "@/components/Home/Footer";
import NavbarDetailsPages2 from "@/components/NavbarDetailsPages2";

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "800", "900"],
  style: ["normal"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal"],
});

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const {
    dataPostWudoo,
    dataPostPray,
    dataAllSettings,
    dataAllLangs,
    dataPreliminaries,
    dataAllSections,
    dataAllCategories,
    dataAllWords,
    dataSettings,
    dataTopicsSearch,
    dataFirstTopic,
    dataAllBooks,
    ...restPageProps
  } = pageProps;

  const combinedFontFamily = `${poppins.style.fontFamily} ${tajawal.style.fontFamily}`;
  const dir = dataAllSettings?.dir || "ltr";

  const siteData = {
    dataPostWudoo,
    dataPostPray,
    dataAllSettings,
    dataAllLangs,
    dataPreliminaries,
    dataAllSections,
    dataAllCategories,
    dataAllWords,
    dir,
    locale,
    dataSettings,
    dataTopicsSearch,
    dataFirstTopic,
    dataAllBooks,
  };

  return (
    <MenuProvider>
      <SiteDataProvider value={siteData}>
        <main
          style={{ fontFamily: combinedFontFamily }}
          className={`App-${locale} text-black bg-white`}
        >
          <NavbarDetailsPages2
            slug={"slug"}
            dataAllBooks={dataAllBooks}
            dataAllSections={dataAllSections}
            dataAllSettings={dataAllSettings}
            dataPreliminaries={dataPreliminaries}
            imgsrc={dataAllSettings?.site_logo}
            dir={dir}
            dataAllLangs={dataAllLangs}
            stieName={dataAllSettings?.site_name}
            dataTopicsSearch={dataTopicsSearch}
          />

          <Component {...restPageProps} />

          <Footer
            dataSettings={dataSettings}
            dataPostPray={dataPostPray}
            dataPostWudoo={dataPostWudoo}
            dataAllLangs={dataAllLangs}
            dataAllCategories={dataAllCategories}
            dataAllSettings={dataAllSettings}
            dataAllWords={dataAllWords}
            dir={dir}
          />
        </main>
      </SiteDataProvider>
    </MenuProvider>
  );
}
//app.newmuslimguide.com/api/
https: MyApp.getInitialProps = async (appContext) => {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
  const locale = appContext.ctx.locale || "en";

  const fetchData = async (endpoint) => {
    try {
      const res = await fetch(`${apiDomain}${endpoint}`, {
        headers: { locale },
      });
      const json = await res.json();
      return json?.data || [];
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      return [];
    }
  };

  const [
    dataPostWudoo,
    dataPostPray,
    dataPreliminaries,
    dataAllSections,
    dataAllLangs,
    dataAllSettings,
    dataAllCategories,
    dataAllWords,
    dataSettings,
    dataTopicsSearch,
    dataFirstTopic,
    dataAllBooks,
  ] = await Promise.all([
    fetchData("/post/66f78a116963f"),
    fetchData("/post/670de63436400"),
    fetchData("/preliminaries"),
    fetchData("/categories"),
    fetchData("/languages"),
    fetchData("/items"),
    fetchData("/categories"),
    fetchData("/get-trans"),
    fetchData("/settings"),
    fetchData("/search"),
    fetchData("/post/6410daa3a3554"),
    fetchData("/get-books"),
  ]);

  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    pageProps: {
      ...appProps.pageProps,
      dataPostWudoo,
      dataPostPray,
      dataPreliminaries: dataPreliminaries?.[0] || {},
      dataAllSections: dataAllSections || [],
      dataAllLangs: dataAllLangs || [],
      dataAllSettings: dataAllSettings,
      dataAllCategories: dataAllCategories || [],
      dataAllWords: dataAllWords || [],
      dataSettings: dataSettings || [],
      dataTopicsSearch: dataTopicsSearch || [],
      dataFirstTopic: dataFirstTopic || [],
      dataAllBooks: dataAllBooks || [],
    },
  };
};

export default MyApp;
