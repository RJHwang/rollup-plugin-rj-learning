import vue from 'rollup-plugin-vue2';
import buble from 'rollup-plugin-buble';
import css from 'rollup-plugin-css-porter';
import stylus from 'rollup-plugin-stylus-compiler';
import nodeResolve from 'rollup-plugin-node-resolve';

var external = Object.keys(require('./package.json').dependencies);

export default {
  entry: 'src/index.vue',
  external: external,
  plugins: [vue(), stylus(), css({minified: false})]
};