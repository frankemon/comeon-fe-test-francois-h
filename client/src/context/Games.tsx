import { createContext, useContext, useState, ReactNode } from 'react';
import { GamesContext as IGamesContext } from '../types/GamesContext';
import { Game } from '../types/Game';

interface GamesProviderProps {
    children: ReactNode;
}

const GamesContext = createContext<IGamesContext | undefined>(undefined)

export const GamesProvider = ({ children }: GamesProviderProps) => {
    // Centralized place for managing games, search and category state
    // Allows for multiple components to use same data without prop drilling
    const [games, setGames] = useState<Game[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<number | null>(0);

    return (
        // Gives access to data and functions
        <GamesContext.Provider value={{
            games,
            setGames,
            searchTerm,
            setSearchTerm,
            selectedCategory,
            setSelectedCategory
        }}>
            {children}
        </GamesContext.Provider>
    )
};

export const useGames = () => {
    const context = useContext(GamesContext);
    if (context === undefined) {
        throw new Error('useGamesContext must be used within GamesProvider');
    }
    return context;
};