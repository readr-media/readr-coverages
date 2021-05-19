const withLinaria = require('next-linaria');
const withImages = require('next-images');

module.exports = withLinaria({
  /**
   * https://github.com/Mistereo/next-linaria
   * https://github.com/callstack/linaria/issues/318
   */
  linaria: {},

  ...withImages({
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,

    fileExtensions: ['jpg', 'jpeg', 'png', 'gif', 'ico', 'webp', 'jp2', 'avif'],

    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
  }),
});
