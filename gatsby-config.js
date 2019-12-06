const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Juno',
    author: 'juno.com.br',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        vectors: path.join(__dirname, 'src/vectors'),
        images: path.join(__dirname, 'src/images'),
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages-markdown',
        path: `${__dirname}/src/pages-markdown`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/uploads`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['JN Qanelas Soft'],
          urls: ['fonts/fonts.css'],
        },
      },
    },
  ],
};
