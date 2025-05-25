import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthContext as IAuthContext } from '../types/AuthContext';
import { Player } from '../types/Player';


// For this test, I'm storing player data in localStorage
// This is not secure but for this test should be enough
// Ideally cookies or database authentication with JWT/refresh tokens are used

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined)

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [player, setPlayer] = useState<Player | null>(null)
    const [isAuthenticated, setIsAthenticated] = useState<boolean>(false)

    // Initial check if player is already in localStorage
    useEffect(() => {
        const player = localStorage.getItem("player")
        if (player) {
            const parsedPlayer = JSON.parse(player)
            setPlayer(parsedPlayer)
            setIsAthenticated(true)
            console.log("Player found in localStorage:", parsedPlayer)
        }
    }, [])

    // Store player in localStorage
    const login = (player: Player) => {
        setPlayer(player)
        setIsAthenticated(true)
        localStorage.setItem("player", JSON.stringify(player))
    }

    // Get player data and if it exists,
    // remove from localStorage state and 
    // set isAuthenticated to false
    const logout = () => {
        const player = localStorage.getItem("player")
        if (player) {
            localStorage.removeItem("player")
            setPlayer(null)
            setIsAthenticated(false)
        }
    }

    return (
        // Gives access to data and functions
        <AuthContext.Provider value={{ player, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};