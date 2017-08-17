module.exports = function(webpackConfig, isDevelopment) {
    
      //here you can modify webpack config
      const path = require('path');
      webpackConfig.module.rules.push(
        {
            test: /\.(js|jsx)$/,
            
            include: /xv-/,
            loader: require.resolve('babel-loader'),
            options: {
              // @remove-on-eject-begin
              babelrc: false,
              presets: [require.resolve('babel-preset-react-app')],
              // @remove-on-eject-end
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
            },
          }
      )  
      return webpackConfig;
    }