import { InputBase } from "@mui/material"
// import useSearch from "../../hooks/useSearch"
import { useGames } from "../../context/Games"

interface SearchProps {
    smallScreen?: boolean;
}

const Search = ({ smallScreen }: SearchProps) => {
    // Switch to useGames context for search instead of a 
    // custom hook because data needed in multiple components
    const { setSearchTerm } = useGames()
    return (
        <InputBase
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search games..."
            className={`bg-white rounded px-4 py-1 ${smallScreen ? "w-[60%]" : "w-64"}`}
            inputProps={{ "aria-label": "search games" }}
        // startAdornment={
        //     <span className="material-icons">{SearchIcon}</span>
        // }
        />
    )
}

export default Search