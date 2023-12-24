const path = require('path');

module.exports = function override(config, env) {
  // Find the Babel loader configuration
  const babelLoader = config.module.rules.find(
    (rule) => rule.oneOf && rule.oneOf.some((loader) => loader.loader && loader.loader.includes('babel-loader'))
  );

  // Exclude react-native-toast-message from Babel processing
  if (babelLoader) {
    babelLoader.oneOf.forEach((loader) => {
      if (loader.include && loader.include.length) {
        loader.include = [
          ...loader.include,
          path.resolve(__dirname, 'node_modules/react-native-toast-message'),
        ];
      }
    });
  }

  return config;
};
