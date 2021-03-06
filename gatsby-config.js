module.exports = {
  pathPrefix: "/lianamoran",
  siteMetadata: {
    title: `Liana Moran`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-native-web`,
    `gatsby-plugin-transition-link`
    ],
}
