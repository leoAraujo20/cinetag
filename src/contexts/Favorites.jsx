import { createContext, useState } from "react";

const FavoriteContext = createContext();
FavoriteContext.displayName = "FavoriteContext";

export default function FavoriteProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    return (
        <FavoriteContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoriteContext.Provider>
    );
}
