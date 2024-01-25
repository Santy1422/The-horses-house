/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

/* const { i18n } = require('./next-i18next.config')
const nextConfig = {
    i18n
}

module.exports = nextConfig */