module.exports = {
  siteMetadata: {
    title: "Title from metadata, yo"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};

exports.onCreateNode = ({ node }) => {
  console.log("Created a new Node...");
  console.log(node.internal.type);
};
