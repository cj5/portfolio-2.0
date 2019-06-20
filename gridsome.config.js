require(`dotenv`).config({path: `.env`,});

module.exports = {
  siteName: 'Bespoke',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.CONTENTFUL_SPACE_ID, // required
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful',
      }
    }
  ]
}
