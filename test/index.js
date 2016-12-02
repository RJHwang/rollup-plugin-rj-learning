import test from 'ava';
import { rollup } from 'rollup';
import buble from 'rollup-plugin-buble';
import postcss from 'rollup-plugin-postcss';
import learning from '../dist/try-rollup.es.js';

process.chdir(__dirname);

test(t => {
  return rollup({
    entry: 'samples/main.js',
    plugins: [learning(), postcss(), buble()]
  }).then(function(bundle) {
    console.log("11 before bundle.generate");
    var generated = bundle.generate();
    console.log("12 after bundle.generate code=%s", generated.code);

    console.log("21 before bundle.write");
    bundle.write({
      dest: '../dist/bundle.js',
      format: 'cjs',
      sourceMap: false,
      useStrict: false,

      // banner: '/* my-banner */',
      // footer: '/* my-footer */',
      // intro: 'var intro = "intro";',
      // outro: 'var outro = "outro";'
    })
    console.log("22 after bundle.write");
  });
});