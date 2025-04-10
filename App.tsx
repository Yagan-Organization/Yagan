import React from 'react';
import { View } from 'react-native';
import { MenuProvider } from './context/UseContextMenu';

function App({ children }: { children: React.ReactNode }) {
  return (
    <View style={{ flex: 1 }}>
      <MenuProvider>
        {children}
      </MenuProvider>
    </View>
  );
}

export default App;
