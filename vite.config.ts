// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@/': path.resolve(__dirname, 'src/') // ~/를 src/ 폴더로 매핑
//       //{ find: "~", replacement: "/src" },
//     }
//   }
// })



import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
// import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  // plugins: [basicSsl(), reactRefresh()],
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/') // @를 src/ 폴더로 매핑
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8081", // Flask 애플리케이션의 주소
        changeOrigin: true,
      },
    },
  },
});