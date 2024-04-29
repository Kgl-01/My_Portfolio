import stylexPlugin from "@stylexjs/rollup-plugin"
import path from "path"

const config = {
  input: "./main.jsx",
  output: {
    file: "./.build/bundle.js",
    format: "es",
  },
  // Ensure that the stylex plugin is used before Babel
  plugins: [
    stylexPlugin({
      // Required. File path for the generated CSS file.
      fileName: "./.build/stylex.css",
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
  ],
}

export default config
