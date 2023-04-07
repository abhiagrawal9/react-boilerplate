export interface IAuthContext {
  isAuthenticated: boolean;
  loading: boolean;
  login: (username: string, password: string, remember: boolean) => void;
  logout: () => void;
}
