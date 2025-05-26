// Left this in as "legacy" code for reference, maybe useful in the future


// import { useState } from "react";
// import { Game } from "../types/Game";

// const useFilter = (games: Game[]) => {
//     const [selectedCategory, setSelectedCategory] = useState<number | null>(0);
//     const gamesByCategory = selectedCategory === 0 || selectedCategory === null
//         ? games
//         : games.filter(game => game.categoryIds.includes(selectedCategory));

//     return {
//         selectedCategory,
//         setSelectedCategory,
//         gamesByCategory
//     }
// }

// export default useFilter;