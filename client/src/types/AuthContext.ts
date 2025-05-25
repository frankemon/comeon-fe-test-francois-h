import { Player } from "./Player";

export interface AuthContext {
    player: Player | null;
    isAuthenticated: boolean;
    login: (player: Player) => void;
    logout: () => void;
    loading: boolean;
}