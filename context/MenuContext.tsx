// components/MenuComponents/MenuContext.tsx
import React, { createContext, useContext, useState } from 'react';

type MenuContextType = {
    selectedButton: number;
    setSelectedButton: (index: number) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function useMenuContext() {
    const context = useContext(MenuContext);
    if (context === undefined) {
        throw new Error('useMenuContext must be used within a MenuProvider');
    }
    return context;
}

export function MenuProvider({ children }: { children: React.ReactNode }) {
    const [selectedButton, setSelectedButton] = useState(0);

    const value = {
        selectedButton,
        setSelectedButton,
    };

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}
