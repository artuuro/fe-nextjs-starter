const withLess = require('@zeit/next-less');
const withOffline = require('next-offline');

module.exports = withOffline(withLess({
  cssModules: true,
  poweredByHeader: false,
  lessLoaderOptions: {
    javascriptEnabled: true
  }
}));