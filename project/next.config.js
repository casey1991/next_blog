module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    PORT: 3000
  },
  publicRuntimeConfig: {
    STATIC_FOLDER: "/static",
    API_URL: "http://localhost:4444/graphql"
  }
};
