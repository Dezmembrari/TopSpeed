// postcss.config.js
import purgecss from '@fullhuman/postcss-purgecss';
import autoprefixer from 'autoprefixer';

const purgeCssPlugin = purgecss({
  content: [
    './index.html',
    './src/**/*.vue',
    './src/**/*.js',
  ],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

export default {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === 'production' ? [purgeCssPlugin] : []),
  ],
};