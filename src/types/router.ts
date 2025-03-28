export enum RouteType {
    PUBLIC = 'public',
    PRIVATE = 'private',
}

export interface RouteConfig {
    path: string;
    element: React.ReactNode;
    children?: RouteConfig[];
}

export interface RootRouteConfig extends RouteConfig {
    routeType: RouteType;
}