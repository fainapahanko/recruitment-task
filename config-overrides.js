const path = require('path');


module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@features':  path.resolve(__dirname, 'src/features'),
      '@pages':  path.resolve(__dirname, 'src/pages'),
      '@components':  path.resolve(__dirname, 'src/components'),
      '@assets':  path.resolve(__dirname, 'src/assets'),
      '@utils':  path.resolve(__dirname, 'src/utils'),
      '@ypes':  path.resolve(__dirname, 'src/types')
    },
  };

  return config;
};
