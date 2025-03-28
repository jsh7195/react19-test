// src/vite-env.d.ts
/// <reference types="vite/client" />

// define에 추가한 전역 변수 타입 정의
declare const __APP_ENV__: string;
declare const __DEVTOOL__: string;

interface ImportMetaEnv {
  readonly VITE_APP_ENV: string;
  readonly VITE_DEVTOOL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}