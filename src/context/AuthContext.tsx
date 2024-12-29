import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import api from '~/services/api';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextData {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  googleAuth: (response: any) => Promise<void>;
  loading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>({
  user: null,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  googleAuth: async () => {},
  loading: true,
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const googleAuth = async (response: any) => {
    const res = await api.post(
      '/api/auth/callback/google', 
      {
        code: response.idToken, 
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  };

  const login = async (email: string, password: string) => {
    try {
      if (email && password) {
        const response = await api.post('/auth/callback/credentials', { email, password });
        if (response.status === 200) {
          const userData: User = response.data;
          await AsyncStorage.setItem('user', JSON.stringify(userData));
          setUser(userData);
        } else {
          throw new Error('Login failed');
        }
      }
    } catch (error) {
      console.error('Login error', error);
      throw error;
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const userData: User = { id: 2, name: 'New User', email };
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      console.error('Registration error', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      console.error('Logout error', error);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Failed to load user from storage', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, googleAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
