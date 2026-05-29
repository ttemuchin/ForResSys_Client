// const API_BASE_URL = 'http://localhost:8000/api/v1';
const API_BASE_URL = '/api/v1';

export type LoginRequest = {
  email: string;
  password: string;
}

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
}

export type UserResponse = {
  id: number;
  name: string;
  email: string;
  apiKey: string | null;
  created_at: string;
}

export type LoginResponse = {
  access_token: string;
  token_type: string;
  user: UserResponse;
}

export type ErrorResponse = {
  detail: string;
}

export const userApi = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await fetch(`${API_BASE_URL}/auth/login?email=${data.email}&password=${data.password}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      const errorData = await response.json() as { detail?: string };
      throw new Error(errorData.detail ?? 'Login failed');
    }
    const result = await response.json() as LoginResponse;
    return result;
  },

  register: async (data: RegisterRequest): Promise<UserResponse> => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json() as { detail?: string };
      throw new Error(errorData.detail ?? 'Registration failed');
    }
    const userData = await response.json() as UserResponse;
    return userData;
  },

  getMe: async (token: string): Promise<UserResponse> => {
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorData = await response.json() as { detail?: string };
      throw new Error(errorData.detail ?? 'Failed to get user info');
    }
    const userData = await response.json() as UserResponse;
    return userData;
  },

  logout: async (): Promise<void> => {
    // ...
    return Promise.resolve();
  },
};