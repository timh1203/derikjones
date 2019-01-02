/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: 'Derik Jones Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Crimson Text`,
          `Montserrat`,
          `Tangerine`,
        ],
      },
    },
  ],
}
