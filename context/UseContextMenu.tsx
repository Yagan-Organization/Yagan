import React, { createContext, useContext, useState } from 'react';

interface MenuContextProps {
    selectedButton: number;
    setSelectedButton: (index: number) => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export function MenuProvider({ children }: { children: React.ReactNode }) {
    const [selectedButton, setSelectedButton] = useState(0);

    return (
        <MenuContext.Provider value={{ selectedButton, setSelectedButton }}>
    {children}
    </MenuContext.Provider>
);
}

export function useMenuContext() {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenuContext must be used within a MenuProvider');
    }
    return context;
}
