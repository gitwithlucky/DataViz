const config = {
    production: process.env.PRODUCTION_URL,
    serverPort: process.env.PORT || 8080,
    appName: "Data Viz API",
    apiVersion: "v1",
    database: {
      endPoint: process.env.DATABASE_URL,
    },
    development: process.env.DEVELOPMENT?.toLowerCase() === "true" ? true : false,
  };
  
  export default config;
  