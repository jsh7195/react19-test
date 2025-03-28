import { RouteConfig, RouteType } from '@/types/router';
import { Navigate, Route } from 'react-router-dom';

const LOGIN_URL = "/login"

// 인증 상태 확인 함수
const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('auth_token');
  return !!token;
};

// 단일 라우트 생성 함수
const createRoute = (route: RouteConfig): React.ReactNode => {
  // 비인증 사용자의 접근 제한된 라우트 처리
  if (route.routeType === RouteType.PRIVATE && !isAuthenticated()) {
    return <Route key={route.path} path={route.path} element={<Navigate to={LOGIN_URL} replace />} />;
  }

  // 중첩 라우트 처리
  if (route.children && route.children.length > 0) {
    return (
      <Route key={route.path} path={route.path} element={route.element}>
        {route.children.map((childRoute) => createRoute(childRoute))}
      </Route>
    );
  }

  // 기본 라우트
  return <Route key={route.path} path={route.path} element={route.element} />;
};

// 전체 라우트 배열 생성 함수
const createRoutes = (routes: RouteConfig[]): React.ReactNode[] => {
  return routes.map((route) => createRoute(route));
};

// 라우팅 유틸리티 함수들 내보내기
const RouteFactory = {
  createRoute,
  createRoutes,
  isAuthenticated
};

export default RouteFactory;