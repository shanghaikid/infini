import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
import template from "./template";
import serve from "rollup-plugin-serve";
const html = require("@rollup/plugin-html");

export default {
  input: "src/index.tsx",
  output: [
    {
      name: "infini",
      dir: "dist/es5",
      format: "iife",
      sourcemap: "inline",
      globals: { react: "React", "react-dom": "ReactDOM" },
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    postcss({
      plugins: [
        require("postcss-nested"),
        require("cssnano")({
          preset: "default",
        }),
      ],
      extract: true,
      extract: "bundle.css",
    }),
    // terser(),
    html({
      title: `${pkg.name} - ${pkg.description}`,
      template,
    }),
    serve({
      open: true,
      contentBase: "dist/es5",
    }),
  ],
  watch: {
    exclude: ["node_modules/**"],
  },
};
