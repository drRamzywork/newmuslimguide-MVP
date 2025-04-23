// pages/api/revalidate-all.js
export default async function handler(req, res) {
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }
  const locale = req.query.locale;
  // جلب جميع الـ slugs من الـ API
  const [cats, pres] = await Promise.all([
    fetch(`${process.env.API}/categories`).then((r) => r.json()),
    fetch(`${process.env.API}/preliminaries`).then((r) => r.json()),
  ]);
  const catSlugs = cats.data.map((c) => c.slug);
  const preSlugs = pres.data.map((p) => p.slug);

  // لائحة الصفحات المراد إعادة توليدها
  const paths = [
    `/${locale}`,
    ...catSlugs.map((s) => `/${locale}/section/${s}`),
    ...preSlugs.map((s) => `/${locale}/preliminaries/${s}`),
  ];

  try {
    await Promise.all(paths.map((p) => res.revalidate(p)));
    return res.json({ revalidated: paths });
  } catch (e) {
    return res.status(500).json({ message: "Error", error: e.message });
  }
}
