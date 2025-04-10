import React from 'react';
import { MenuProvider } from './context/UseContextMenu';

function App({ children }: { children: React.ReactNode }) {
  return (
    <MenuProvider>
      {children}
    </MenuProvider>
  );
}

export default App;
