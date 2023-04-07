import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';

import { CREDENTIALS_KEY } from '../constants';
import { IAuthContext, ICredentials } from '../models';

// Auth Context
const AuthContextDefaults: IAuthContext = {
  isAuthenticated: false,
  loading: true,
  login: (_username: string, _password: string, _remember: boolean) => {},
  logout: () => {},
};

const AuthContext = createContext<IAuthContext>(AuthContextDefaults);

export const useAuthContext = () => useContext(AuthContext);

// Auth Context Provider
type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider: FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const credentials =
      localStorage.getItem(CREDENTIALS_KEY) ||
      sessionStorage.getItem(CREDENTIALS_KEY);
    if (!credentials) {
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }

    setIsAuthenticated(true);
    setLoading(false);
  }, []);

  const login = (
    username: string,
    _password: string,
    remember?: boolean,
  ): void => {
    const userCredentials: ICredentials = {
      username,
      token: '123456', // for demo purpose
    };
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem(CREDENTIALS_KEY, JSON.stringify(userCredentials));
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem(CREDENTIALS_KEY);
    localStorage.removeItem(CREDENTIALS_KEY);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
