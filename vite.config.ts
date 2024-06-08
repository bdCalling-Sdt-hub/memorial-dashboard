import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "138.197.25.196", 
    // host: "192.168.10.102", 
    port: 3001,
  },
});
