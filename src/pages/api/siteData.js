// /pages/api/siteData.js
export default async function handler(req, res) {
  const locale = req.headers.locale || "ar";
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

  const fetchData = async (endpoint) => {
    try {
      const res = await fetch(`${apiDomain}${endpoint}`, {
        headers: { locale },
      });
      const json = await res.json();
      return json?.data || [];
    } catch (e) {
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

  res.status(200).json({
    dataPostWudoo,
    dataPostPray,
    dataPreliminaries: dataPreliminaries?.[0] || {},
    dataAllSections,
    dataAllLangs,
    dataAllSettings,
    dataAllCategories,
    dataAllWords,
    dataSettings,
    dataTopicsSearch,
    dataFirstTopic,
    dataAllBooks,
  });
}
