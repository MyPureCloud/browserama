import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'index.js',
  plugins: [ babel(), uglify() ],
  output: {
    file: 'out/browserama.min.js',
    name: 'browserama',
    format: 'umd'
  }
};
