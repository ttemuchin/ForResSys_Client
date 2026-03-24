import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MAIN_ROUTE, BASES_ROUTE, PRED_ROUTE, LIMS_ROUTE, LOGIN_ROUTE } from '../../consts';
import { useAuthStore } from '../../store/authStore';
import styles from './Sidebar.module.css';
import cn from 'classnames';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
//   const { isAuth, logout } = useAuthStore();
    const isAuth = true;

  const menuItems = [
    { path: BASES_ROUTE, label: 'Bases' },
    { path: PRED_ROUTE, label: 'Predict samples' },
    { path: LIMS_ROUTE, label: 'LIMS' },
  ];

  const handleToggle = () => {
    if (!isAuth) {
      void navigate(LOGIN_ROUTE);
      return;
    }
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    if (!isAuth) {
      void navigate(LOGIN_ROUTE);
      return;
    }
    void navigate(MAIN_ROUTE);
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // logout();
    void navigate(LOGIN_ROUTE);
    setIsOpen(false);
  };

  const handleClose = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <div className={styles.sidebarWrapper}>
      <div 
        className={cn(styles.userPanel, {
          [styles.open]: isOpen
        })}
      >
        <div className={styles.userInfo} onClick={handleToggle}>
          <img 
            src="/logo.png" 
            className={styles.logo}
            onClick={isOpen ? handleLogoClick : undefined}
          />
          <span className={styles.userName}>Name</span>
        </div>

        {!isOpen && (
          <div className={styles.stripe} onClick={handleToggle}>
            <div className={styles.stripeLine}></div>
            <svg 
              className={styles.arrow} 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none"
            >
              <path 
                d="M4 6L8 10L12 6" 
                stroke="#858585" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}

        {isOpen && (
          <>
            <div className={styles.divider}></div>
            <nav className={styles.menu}>
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    cn(styles.menuItem, {
                      [styles.active]: isActive
                    })
                  }
                  onClick={() => { setIsOpen(false); }}
                >
                  {item.label}
                </NavLink>
              ))}
              <button 
                className={styles.logoutButton}
                onClick={handleLogout}
              >
                Log out
              </button>
            </nav>
            <div className={styles.stripeBottom} onClick={handleClose}></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;