/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['yqeoqilyteenoccqcbzs.supabase.co'],
  },
  async redirects() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemaps/sitemap.xml',
        permanent: true,
      },
      {
        source: '/page-sitemap.xml',
        destination: '/sitemaps/page-sitemap.xml',
        permanent: true,
      },
      // {
      //   source: '/annonces-sitemap.xml',
      //   destination: '/sitemaps/annonces-sitemap.xml',
      //   permanent: true,
      // },
      // {
      //   source: '/actualites-sitemap.xml',
      //   destination: '/sitemaps/actualites-sitemap.xml',
      //   permanent: true,
      // },
      {
        source: '/sitemap-posts-:date.xml',
        destination: '/sitemaps/actualites/:date',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
