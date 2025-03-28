export enum RouteType {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
  ADMIN = 'ADMIN'
}

export interface AppRoute {
  path: string;
  element: React.ReactNode;
  routeType: RouteType;
  children?: AppRoute[];
}
