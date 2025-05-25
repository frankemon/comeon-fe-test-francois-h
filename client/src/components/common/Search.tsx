import { InputBase } from "@mui/material"
// import SearchIcon from '@material-ui/icons/Search';

const Search = () => {
    return (
        <InputBase
            placeholder="Search games..."
            className="bg-white rounded px-4 py-1 w-64"
            inputProps={{ "aria-label": "search games" }}
        // startAdornment={
        //     <span className="material-icons">{SearchIcon}</span>
        // }
        />
    )
}

export default Search