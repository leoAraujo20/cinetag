import { createContext, useState } from "react";

export const FavoriteContext = createContext();
FavoriteContext.displayName = "FavoriteContext";

export function FavoriteProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    return (
        <FavoriteContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoriteContext.Provider>
    );
}
