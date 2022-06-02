module.exports = {
  siteMetadata: {
    title: `Christian’s Gatsby Sandbox`,
    siteUrl: `https://gatsbygithubmain.gtsb.io`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
}
