module.exports = {
  siteMetadata: {
    title: `Gatsby GitHub Sandbox`,
    siteUrl: `https://gatsbygithubmain.gtsb.io`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
}
