module.exports = {
  siteMetadata: {
    title: `Hemanth H S`,
    description: `Hey I'm Hemanth H S⚡ I'm a Web Dev working my way up the ladder in ReactJS and the MERN stack.`,
    author: `Hemanth H S`,
    siteUrl:
      process.env.DEV_ENV === 1
        ? `https://hemanthx.netlify.app/`
        : `https://hemanthx.netlify.app/`,
    image: `/images/og-card.png`,
    twitterUsername: `@theblizrdx`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-163929831-3",
        head: true,
        anonymize: false,
        respectDNT: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    "gatsby-image",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hemanth H S`,
        short_name: `Hemanth H S`,
        start_url: `/`,
        background_color: `#2d3748`,
        theme_color: `#81E6D9`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo-512x512.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://hemanthx.netlify.app/",
        sitemap: "https://hemanthx.netlify.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: [
          "GATSBY_GOOGLE_SITE_VERIFICATION, GOOGLE_ANALYTICS_TRACKING_ID, DEV_ENV",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              elements: [`h2`, `h3`],
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {},
          },
        ],
      },
    },
    "gatsby-remark-autolink-headers",
  ],
}
