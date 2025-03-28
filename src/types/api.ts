export interface IAPI_RESPONSE<T = any | undefined> {
    code: string | 'SUCCESS';
    message: string;
    data: T;
    timestamp: string;
}

export const VERSION = 'v1';
export const SVC = `svc/${VERSION}`;

