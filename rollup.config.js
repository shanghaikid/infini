import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import * as html from '@rollup/plugin-html';

// load information from package.json
import pkg from './package.json';
// load html template
import template from './template';

export default {
  input: 'src/index.tsx',
  output: [
    {
      name: 'infini',
      dir: 'dist/es5',
      format: 'iife',
      sourcemap: true,
      globals: { react: 'React', 'react-dom': 'ReactDOM' },
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    eslint({ throwOnError: true}),
    typescript(),
    resolve(),
    commonjs(),
    postcss({
      plugins: [
        require('postcss-nested'),
        require('cssnano')({
          preset: 'default',
        }),
      ],
      extract: true,
      extract: 'bundle.css',
    }),
    terser(),
    html({
      title: `${pkg.name} - ${pkg.description}`,
      template,
    }),
    serve({
      open: true,
      contentBase: 'dist/es5',
    }),
  ],
  watch: {
    exclude: ['node_modules/**'],
  },
};
