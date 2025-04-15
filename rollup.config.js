import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';

const packageJson = require('./package.json');
const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: 'src'
  },
  plugins: [
    peerDepsExternal(),
    json(),
    resolve({
      extensions
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: [
        'node_modules/**',
        'src/app/**'
      ],
      extensions,
      include: ['src/**/*'],
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
      ]
    }),
    commonjs(),
    postcss({
      extensions: ['.css', '.scss', '.sass'],
      minimize: true,
      modules: true,
      inject: true,
    }),
    typescript({ 
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
      rootDir: 'src'
    }),
    terser(),
  ],
  external: [
    'react', 
    'react-dom', 
    'next',
    '@lexical/react',
    '@lexical/rich-text',
    '@lexical/code',
    '@lexical/link',
    '@lexical/list',
    '@lexical/mark',
    '@lexical/markdown',
    '@lexical/table',
    '@lexical/utils',
    'lexical',
    'jotai',
    '@radix-ui/react-collection'
  ]
};