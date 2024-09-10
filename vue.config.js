// vue.config.js
const { defineConfig } = require('@vue/cli-service');
const PurgeCSSPlugin = require('@fullhuman/postcss-purgecss');

module.exports = defineConfig({
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          PurgeCSSPlugin({
            content: ['./public/index.html', './src/**/*.vue', './src/**/*.js'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
        ],
      },
    },
  },
});
