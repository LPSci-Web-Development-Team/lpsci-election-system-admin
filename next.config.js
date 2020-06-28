/**
 * LPSci Web Development Team - Election Admin HTML Renderer
 *
 * NOTE: To whomever shall follow our work, behold our art.
 * This software was Made & Crafted with love.
 * She was written to read like poetry.
 * Treat her well.
 * And when you touch this source code,
 * leave your signature below to show that you were part of its legacy.
 *
 * @author Prince Neil Cedrick Castro
 * cedi.castro@gmail.com
 */
require('dotenv').config();

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

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
    API: process.env.API,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
  },
  generateinDevMode: true,
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-webfonts',
          cacheableResponse: {
            statuses: [0, 200],
          },
          expiration: {
            maxAgeSeconds: 60 * 60 * 24 * 365,
            maxEntries: 30,
          },
        }
      },
      {
        urlPattern: /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          cacheableResponse: {
            statuses: [0, 200],
          },
          expiration: {
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          },
        },
      },
      {
        urlPattern: /\.(?:js|css)$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'static-resources',
          cacheableResponse: {
            statuses: [0, 200],
          },
        }
      },
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          cacheableResponse: {
            statuses: [0, 200],
          },
          expiration: {
            maxEntries: 200
          }
        }
      },
    ],
  },
};

module.exports = foldLeft(
  withTSConfig,
  initialConfig,
);
