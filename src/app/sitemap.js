export default async function sitemap() {
  const baseUrl = 'https://icona4games.vercel.app';

  // 1. جلب بيانات الألعاب من الرابط الخاص بك
  const response = await fetch('https://697e3ecb97386252a26a3f45.mockapi.io/db/games');
  const data = await response.json();

  // التأكد من الوصول للمصفوفة الصحيحة (حسب هيكلة ملف الـ JSON الخاص بك)
  const games = Array.isArray(data) ? data : (data.games || []);

  // 2. تحويل بيانات الألعاب إلى تنسيق Sitemap
  const gameEntries = games.map((game) => ({
    url: `${baseUrl}/pages/games/${game.name}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 1,
  }));

  // 3. تعريف الصفحات الثابتة (الرئيسية وغيرها)
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pages/games`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pages/copyRight`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ];

  // 4. دمج الكل في قائمة واحدة
  return [...staticPages, ...gameEntries];
}
