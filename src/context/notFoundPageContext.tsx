"use client"
import { createContext, useContext, useState } from "react";

interface NotFoundPageContextType {
    is404: boolean;
    toggleIs404: (value: boolean) => void;
}

export const NotFoundPageContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [is404, setIs404] = useState(false);

    const toggleIs404 = (value: boolean) => {
        setIs404(value);
    };    

    return (
        <NotFoundPageContext.Provider value={{ is404, toggleIs404 }}>
            {children} 
        </NotFoundPageContext.Provider>
    );
};


const NotFoundPageContext = createContext<NotFoundPageContextType | undefined>(undefined);


export const useNotFoundPageContext = () => {
    const context = useContext(NotFoundPageContext);

    if (!context) {
        throw new Error("useNotFoundPageContext must be used within a useNotFoundPageContextProvider");
    }

    return context;
};
