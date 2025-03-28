// src/hooks/useAuth.ts
export const useAuth = () => {
  // 실제 인증 로직 구현
  return {
    isAuthenticated: true, // 개발 편의를 위해 기본값은 true
    isAdmin: false,
    isLoading: false,
    user: null,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
  };
};
