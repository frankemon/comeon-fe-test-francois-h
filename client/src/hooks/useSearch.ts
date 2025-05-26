// Left this in as "legacy" code for reference, maybe useful in the future


// import { useState } from "react";
// import { Game } from "../types/Game";

// const useSearch = (games: Game[]) => {
//     const [searchTerm, setSearchTerm] = useState<string>('');

//     const gamesBySearch = searchTerm === "" || searchTerm === null
//         ? games
//         : games.filter(game => game.name.includes(searchTerm));

//     return {
//         searchTerm,
//         setSearchTerm,
//         gamesBySearch
//     }
// }

// export default useSearch;