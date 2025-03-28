import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './libs/query'
import { setDefaultOptions } from 'date-fns'
import { ko } from 'date-fns/locale'
import { Root } from '@redux-devtools/app';

// date-fns 글로벌 설정 - 한국어 로케일 기본값으로 지정
setDefaultOptions({
  locale: ko
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {__APP_ENV__ === 'local'}<ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
)