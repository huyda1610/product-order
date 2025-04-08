import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  esbuild: {
    loader: "tsx",
    include: /src\/.*\.tsx?$/,
    exclude: /node_modules/,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 500,
  },
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "@core": path.resolve(__dirname, "src/@core"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routers": path.resolve(__dirname, "src/routers"),
      "@themes": path.resolve(__dirname, "src/themes"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
});

