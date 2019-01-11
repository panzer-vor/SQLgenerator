// import { uglify } from 'rollup-plugin-uglify'
// import babel from 'rollup-plugin-babel'
// import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/sqlG.js',
    format: 'cjs'
  },
  sourceMap: true,
  plugins: [
    // babel({
    //   exclude: 'node_modules/**'
    // }),
    // uglify(),
    // resolve(),
  ]
};
