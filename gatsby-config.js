/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: 'Derik Jones Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
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
