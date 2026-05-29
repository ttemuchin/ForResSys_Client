import React, { useState } from 'react';
import { useAuthStore } from '../store/AuthStore';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTE } from '../consts';
import styles from './AuthForm.module.css';

type AuthMode = 'login' | 'register';

const AuthForm: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const { login, register, isLoading, clearError } = useAuthStore(); //+error
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    const submit = async () => {
        try {
        if (mode === 'login') {
            await login({ email, password });
        } else {
            await register({ name, email, password });
        }
        void navigate(MAIN_ROUTE);
        } catch {
        // Ошибка уже в store
        }
    };

    void submit();
  };
  
  const toggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
    clearError();
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>
          {mode === 'login' ? 'Sign In' : 'Create Account'}
        </h2>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          {mode === 'register' && (
            <div className={styles.field}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => { setName(e.target.value); }}
                className={styles.input}
                required
              />
            </div>
          )}
          
          <div className={styles.field}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); }}
              className={styles.input}
              required
            />
          </div>
          
          <div className={styles.field}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); }}
              className={styles.input}
              required
            />
          </div>
          
          {/* {error && <div className={styles.error}>{error}</div>} */}
          
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : (mode === 'login' ? 'Sign In' : 'Sign Up')}
          </button>
        </form>
        
        <div className={styles.footer}>
          <button onClick={toggleMode} className={styles.toggleButton}>
            {mode === 'login' 
              ? "Or Sign Up" 
              : "Or Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;