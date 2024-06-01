// next.config.js
const nextConfig = {
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader'
          }
        ]
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;  