/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['dummyjson.com'],
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/homepage',
        permanent: true,
      },
    ]

  }
}
