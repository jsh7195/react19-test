// vite.config.ts
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  // env 폴더에서 환경 변수 로드 (루트 대신 env 디렉토리 사용)
  const env = loadEnv(mode, path.resolve(__dirname, 'env'), 'VITE_')

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    // env 변수를 define에 추가하여 클라이언트 코드에서 접근 가능하게 함
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_APP_ENV),
      __DEVTOOL__: JSON.stringify(env.VITE_DEVTOOL)
    }
  }
})