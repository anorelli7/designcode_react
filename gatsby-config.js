module.exports = {
  siteMetadata: {
    title: 'Design+Code 3',
    'description': 'No coding experience required',
    'keywords': 'Sketch, react, plugins'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'k8o7oxf3suj6',
        accessToken: '5cd7f4e9bf2ece0efa16a66cd0e5860a39e4abfefa8774ca5aa9be735b6d21cc'
      }
    }
  ],
}
