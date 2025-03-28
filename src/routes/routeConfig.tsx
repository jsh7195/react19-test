import { RootRouteConfig, RouteConfig, RouteType } from '@/types/router';

// 페이지 임포트

// 템플릿 임폴트

export const routes: RootRouteConfig[] = [



  // ============  공개 라우트 (로그인 불필요)============ 
  // {
  //   path: '/',
  //   element: <MainLayout />,
  //   routeType: RouteType.PUBLIC,
  //   children: [
  //     {
  //       path: '/',
  //       element: <HomePage />,
  //       routeType: RouteType.PUBLIC,
  //     },
  //     {
  //       path: '/login',
  //       element: <LoginPage />,
  //       routeType: RouteType.PUBLIC,
  //     },
  //   ],
  // },
  
  // ============ 인증 필요 라우트 ============ 
  // {
  //   path: '/dashboard',
  //   element: <AuthLayout />,
  //   routeType: RouteType.PRIVATE,
  //   children: [
  //     {
  //       path: '/devices',
  //       element: <DeviceListPage />,
  //       routeType: RouteType.PRIVATE,
  //     },
  //     {
  //       path: '/notices',
  //       element: <NoticePage />,
  //       routeType: RouteType.PRIVATE,
  //     },
  //   ],
  // },
  
  // 404 페이지
  // {
  //   path: '*',
  //   element: <NotFoundPage />,
  //   routeType: RouteType.PUBLIC,
  // },
];