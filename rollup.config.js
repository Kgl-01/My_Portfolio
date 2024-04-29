import stylexPlugin from "@stylexjs/rollup-plugin"
import path from "path"
import babel from "@rollup/plugin-babel"
import postcss from "rollup-plugin-postcss"
import image from "@rollup/plugin-image"

const config = {
  input: "./src/main.jsx",
  output: {
    file: "./.build/bundle.js",
    format: "es",
  },
  // Ensure that the stylex plugin is used before Babel
  plugins: [
    stylexPlugin({
      // Required. File path for the generated CSS file.
      fileName: "stylex.css",
      // default: false
      dev: false,
      // prefix for all generated classNames
      classNamePrefix: "x",
      // Required for CSS variable support
      unstable_moduleResolution: {
        // type: 'commonJS' | 'haste'
        // default: 'commonJS'
        type: "commonJS",
        // The absolute path to the root directory of your project
        rootDir: path.resolve(),
      },
    }),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
    }),
    postcss({
      extract: true,
      minimize: true,
    }),
    image(),
  ],

  external: ["react", "react-dom/client"],
}

export default config
