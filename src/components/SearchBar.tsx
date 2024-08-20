import { Dispatch } from "react";
import { FaSearch } from "react-icons/fa"

export default function SearchBar({ setSearch }: { setSearch: Dispatch<React.SetStateAction<string | null>>}) {
    
    return (
        <div className="search">
            <FaSearch />
            <input type="text" placeholder="Search country name" onChange={(e) => {setSearch(e.target.value)}}/>
        </div>
    )
}