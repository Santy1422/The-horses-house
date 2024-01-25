const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const webpack = require('webpack');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Ignorar el módulo específico que está causando problemas
  config.plugins.push(
    new webpack.IgnorePlugin({
      resourceRegExp: /^..\/..\/Utilities\/Platform$/
    })
  );

  return config;
};
