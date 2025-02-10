'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import { getUserFromToken } from '@/middleware/auth';

interface User {
  id: string;
  username: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean; // Novo estado para verificação em andamento
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento

  // Verifica se o usuário já está autenticado ao carregar a página
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const userData = getUserFromToken();
      if (userData) {
        setIsAuthenticated(true);
        setUser(userData);
      }
    }
    setIsLoading(false); // Finaliza a verificação
  }, []);

  const login = (token: string) => {
    Cookies.set('token', token, { expires: 7 }); // Armazena o token nos cookies
    const userData = getUserFromToken();
    if (userData) {
      setIsAuthenticated(true);
      setUser(userData);
    }
  };

  const logout = () => {
    Cookies.remove('token'); // Remove o token
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};