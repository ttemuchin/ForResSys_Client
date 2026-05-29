/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { userApi, UserResponse, LoginRequest, RegisterRequest } from '../api/user';

type AuthState = {
  user: UserResponse | null;
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
  token: string | null;
  
  login: (data: LoginRequest) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  clearError: () => void;
  setToken: (token: string) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuth: false,
      isLoading: false,
      error: null,
      token: null,

      login: async (data: LoginRequest) => {
        set({ isLoading: true, error: null });
        try {
          const response = await userApi.login(data);
          set({ 
            user: response.user, 
            isAuth: true, 
            isLoading: false,
            token: response.access_token
          });
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Login failed', 
            isLoading: false 
          });
          throw error;
        }
      },

      register: async (data: RegisterRequest) => {
        set({ isLoading: true, error: null });
        try {
          const user = await userApi.register(data);

          const loginResponse = await userApi.login({ 
            email: data.email, 
            password: data.password 
          });
          set({ 
            user: loginResponse.user, 
            isAuth: true, 
            isLoading: false,
            token: loginResponse.access_token
          });
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Registration failed', 
            isLoading: false 
          });
          throw error;
        }
      },

      logout: async () => {
        await set({ user: null, isAuth: false, isLoading: false, token: null });
      },

      checkAuth: async () => {
        const { token } = get();
        if (!token) {
          set({ isAuth: false, user: null });
          return;
        }
        
        set({ isLoading: true });
        try {
          const userData = await userApi.getMe(token);
          set({ user: userData, isAuth: true, isLoading: false });
        } catch (error) {
          set({ isAuth: false, user: null, isLoading: false, token: null });
        }
      },

      clearError: () => set({ error: null }),
      setToken: (token: string) => set({ token }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user, isAuth: state.isAuth, token: state.token }),
    }
  )
);