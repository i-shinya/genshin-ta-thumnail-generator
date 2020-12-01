const path = require('path');
const vueSrc = './src';

module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': path.join(__dirname, vueSrc),
      },
    },
  },
  productionSourceMap: false,
};
