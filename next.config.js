require('dotenv').config();

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");;

function foldLeft(...values) {
  return values.reduceRight((p, c) => c(p));
}

function withTSConfig(value) {
  return {
    ...value,
    webpack(config) {
      if (config.resolve.plugins) {
        config.resolve.plugins.push(new TsconfigPathsPlugin());
      } else {
        config.resolve.plugins = [new TsconfigPathsPlugin()];
      }

      if (value.webpack) {
        return value.webpack(config);
      }

      return config;
    },
    // target: "serverless",
  };
}

const initialConfig = {
  distDir: 'build',
  env: {
    /* TODO Add env variables here i.e.,     
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    */
   API: process.env.API,
  }
};

module.exports = foldLeft(
  withTSConfig,
  initialConfig,
);
