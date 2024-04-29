import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import stylexPlugin from "@stylexjs/rollup-plugin"
import styleXPlugin from "@stylexjs/babel-plugin"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        configFile: true,
      },
    }),
  ],
})
