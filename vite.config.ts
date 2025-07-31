// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/sunshine-web-studio/", // 🔁 replace with your GitHub repo name
  plugins: [react()],
});
