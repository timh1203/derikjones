module.exports = {
  siteMetadata: {
    title: 'Derik Jones Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Crimson Text`,
          `Montserrat`,
          `Tangerine`,
        ]
      },
    },
  ],
}
