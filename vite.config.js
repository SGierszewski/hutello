import dotenv from "dotenv";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

dotenv.config();

const BACKEND_PORT = process.env.PORT;

//https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    proxy: {
      "/api": {
        target: `http://localhost:${BACKEND_PORT}`,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "dist/app",
  },
});
