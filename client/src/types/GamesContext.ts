import { Game } from "./Game";

export interface GamesContext {
    games: Game[];
    setGames: (games: Game[]) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    selectedCategory: number | null;
    setSelectedCategory: (categoryId: number | null) => void;
}