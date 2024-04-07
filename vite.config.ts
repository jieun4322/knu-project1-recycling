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

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/') // @를 src/ 폴더로 매핑
    }
  }
});