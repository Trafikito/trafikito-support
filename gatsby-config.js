module.exports = {
  pathPrefix: `/support`,
  siteMetadata: {
    title: `Trafikito - monitor output of any command`,
    author: `Lukas Liesis`,
    description: `Trafikito is monitoring solution. It runs super light POSIX opens ource agent on linux machine and executes commands you select. Then Trafikito servers will parse the output and do all the magic of monitoring - charts, notifications etc.`,
    siteUrl: `https://trafikito.com/support`,
    social: {
      twitter: `trafikito`,
      youtube: `https://www.youtube.com/channel/UCofioaADtesyD75204ngeoQ`,
      facebook: `Trafikito`,
      linkedin: `Trafikito`,
      instagram: `trafikito`,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        'excerpt_separator': `<!-- more -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
  ],
};
