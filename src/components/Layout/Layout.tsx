import React from 'react';
import Sidebar from './Sidebar';
import styles from './Layout.module.css';
import Recents from '../Recents';

type LayoutProps = {
  leftSlot?: React.ReactNode;
  centerSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  leftSlot, 
  centerSlot, 
  rightSlot  
  }) => {
  return (
    <div className={styles.layout}>
      <aside className={styles.leftPanel}>
        <Sidebar />
        {leftSlot && <div className={styles.leftSlot}>{leftSlot}</div>}
      </aside>
      
      <main className={styles.mainContent}>
        {centerSlot}
      </main>
      
      <aside className={styles.rightPanel}>
        {rightSlot ?? <Recents />}
      </aside>
    </div>
  );
};

export default Layout;