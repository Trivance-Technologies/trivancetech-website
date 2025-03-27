"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface NavigationContextType {
    isNavVisible: boolean;
    toggleNavigation: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNavigation = () => {
        setIsNavVisible((prev) => !prev);
    };

    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        setIsNavVisible(false); //detects when the page changes and automatically changes the nav component to hidden
    }, [pathname, searchParams]);

    return (
        <NavigationContext.Provider value={{ isNavVisible, toggleNavigation }}>
            {children} 
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    const context = useContext(NavigationContext);

    if (!context) {
        throw new Error("useNavigation must be used within a NavigationProvider");
    }

    return context;
};
