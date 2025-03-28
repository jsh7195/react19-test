import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';
import { queryClient } from './query'; // React Query 클라이언트 경로는 실제 구조에 맞게 조정 필요

// API 응답 타입 정의
export interface IAPI_RESPONSE<T> {
  success: boolean;
  data: T;
  message?: string;
  code?: string;
}

const REDIRECT_LOGIN_URL = "/login"

// 인증이 필요없는 API 경로 목록
const AUTH_EXEMPT_ROUTES = [
  REDIRECT_LOGIN_URL
];

// 토큰 갱신 상태 관리
let isRefreshingToken = false;

/**
 * 에러 응답 처리 함수
 */
export const handleErrorResponse = async (status?: number, originalRequest?: any) => {
  if (status === 401 && !isRefreshingToken) {
    // 토큰 갱신 로직 시작
    isRefreshingToken = true;

    try {
      const userInfo = localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo') || '{}')
        : null;

      if (!userInfo?.refreshToken) {
        // 리프레시 토큰이 없으면 로그아웃 처리
        localStorage.removeItem('userInfo');
        window.location.href = '/login';
        return Promise.reject('No refresh token available');
      }

      // TODO: 실제 토큰 갱신 API 호출 구현
      console.log('Token refresh logic will be implemented');

      // React Query 캐시 무효화 - 모든 쿼리를 리프레시
      queryClient.invalidateQueries();

      return Promise.resolve();
    } catch (error) {
      // 토큰 갱신 실패 시 로그아웃 처리
      localStorage.removeItem('userInfo');
      window.location.href = REDIRECT_LOGIN_URL;
      return Promise.reject('Failed to refresh token');
    } finally {
      isRefreshingToken = false;
    }
  }

  return Promise.reject(status);
};

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  headers: { 'Content-Type': 'application/json' },
  timeout: 30000, // 30초 타임아웃
});

// 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  (config) => {
    const url = config.url?.split('?')[0] || '';

    // 인증이 필요한 API인 경우에만 토큰 추가
    if (!AUTH_EXEMPT_ROUTES.includes(url)) {
      const userInfo = localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo') || '{}')
        : null;

      if (userInfo?.accessToken) {
        config.headers.Authorization = `Bearer ${userInfo.accessToken}`;
      } else {
        // 로그인 페이지가 아니고 토큰이 필요한데 없는 경우
        const currentPath = window.location.pathname;
        if (currentPath !== REDIRECT_LOGIN_URL) {
          window.location.href = REDIRECT_LOGIN_URL;
        }
      }
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 설정
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    // 401 에러인 경우 토큰 갱신 시도
    if (error.response?.status === 401) {
      try {
        // 토큰 갱신 로직 호출
        await handleErrorResponse(401, error.config);

        // 원래 요청 reject - React Query가 자체적으로 재시도 처리
        return Promise.reject(error);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    // 에러 로깅
    console.error(`API Error (${error.response?.status}):`, error.message);

    // 서버에서 보낸 에러 메시지가 있으면 활용
    const errorMessage = error.response?.data?.message || error.message;

    return Promise.reject({
      status: error.response?.status,
      message: errorMessage,
      data: error.response?.data
    });
  }
);

// 쿼리 파라미터 직렬화 설정
axiosInstance.defaults.paramsSerializer = {
  serialize: (params: any) => qs.stringify(params, {
    arrayFormat: 'repeat',
    encode: true,
    strictNullHandling: true
  }),
};

// 네트워크 요청 유틸리티
const network = {
  /**
   * GET 요청
   * @param url API 엔드포인트
   * @param params 쿼리 파라미터
   */
  get: <T>(url: string, params?: any) => {
    return axiosInstance.get<IAPI_RESPONSE<T>>(url, { params });
  },

  /**
   * POST 요청
   * @param url API 엔드포인트
   * @param data 요청 바디
   * @param config 추가 설정
   */
  post: <T>(url: string, data: any, config?: AxiosRequestConfig) => {
    return axiosInstance.post<IAPI_RESPONSE<T>>(url, data, config);
  },

  /**
   * PUT 요청
   * @param url API 엔드포인트
   * @param data 요청 바디
   * @param config 추가 설정
   */
  put: <T>(url: string, data: any, config?: AxiosRequestConfig) => {
    return axiosInstance.put<IAPI_RESPONSE<T>>(url, data, config);
  },

  /**
   * DELETE 요청
   * @param url API 엔드포인트
   * @param params 쿼리 파라미터
   */
  delete: <T>(url: string, params?: any) => {
    return axiosInstance.delete<IAPI_RESPONSE<T>>(url, { params });
  },

  /**
   * 직접 응답 타입을 지정하는 GET 요청
   * @param url API 엔드포인트
   * @param config 추가 설정
   */
  getRaw: <T>(url: string, config?: AxiosRequestConfig) => {
    return axiosInstance.get<T>(url, config);
  },

  /**
   * 폼 데이터 전송 POST 요청
   * @param url API 엔드포인트
   * @param formData FormData 객체
   * @param config 추가 설정
   */
  postForm: <T>(url: string, formData: FormData, config?: AxiosRequestConfig) => {
    return axiosInstance.post<IAPI_RESPONSE<T>>(url, formData, {
      ...config,
      headers: {
        ...config?.headers,
        'Content-Type': 'multipart/form-data'
      }
    });
  }
};

export default network;