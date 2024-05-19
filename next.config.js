/** @type {import('next').NextConfig} */

module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/_next/static/files/', // Adjust the path as needed
            outputPath: 'static/files/', // Adjust the path as needed
          },
        },
      });
  
      return config;
    },
  };