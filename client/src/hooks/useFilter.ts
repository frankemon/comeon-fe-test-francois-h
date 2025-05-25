import { useState } from "react";
import { Game } from "../types/Game";

const useFilter = (games: Game[]) => {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(0);
    const filteredGames = selectedCategory === 0 || selectedCategory === null
        ? games
        : games.filter(game => game.categoryIds.includes(selectedCategory));

    console.log("Filtered Games:", filteredGames);
    return {
        selectedCategory,
        setSelectedCategory,
        filteredGames
    }
}

export default useFilter;