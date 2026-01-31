export default async function sitemap() {
  const baseUrl = 'http://localhost:3001';

  // 1. جلب بيانات الألعاب من الرابط الخاص بك
  const response = await fetch('https://hoobs0.github.io/games-json_file/db.json');
  const data = await response.json();

  // التأكد من الوصول للمصفوفة الصحيحة (حسب هيكلة ملف الـ JSON الخاص بك)
  const games = Array.isArray(data) ? data : (data.games || []);

  // 2. تحويل بيانات الألعاب إلى تنسيق Sitemap
  const gameEntries = games.map((game) => ({
    url: `${baseUrl}/pages/games/${game.name}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
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
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pages/copyRight`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // 4. دمج الكل في قائمة واحدة
  return [...staticPages, ...gameEntries];
}