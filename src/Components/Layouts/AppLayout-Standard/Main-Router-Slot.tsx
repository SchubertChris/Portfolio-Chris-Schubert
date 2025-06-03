// ===========================
// MAIN ROUTER SLOT COMPONENT
// ===========================

import React from 'react';
import './Main-Router-Slot.scss';

interface MainRouterSlotProps {
  children: React.ReactNode;
}

const MainRouterSlot: React.FC<MainRouterSlotProps> = ({ children }) => {
  return (
    <main className="main-content" id="main-content">
      {children}
    </main>
  );
};

export default MainRouterSlot;