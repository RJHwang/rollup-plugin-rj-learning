import vue from 'rollup-plugin-vue2';
import buble from 'rollup-plugin-buble';
import css from 'rollup-plugin-css-porter';

var external = Object.keys(require('./package.json').dependencies);

export default {
  entry: 'src/index.vue',
  external: external,
  plugins: [vue(), css(), buble()]
};