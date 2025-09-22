import { Search } from "lucide-react";
import React, { useRef } from "react";

const SearchInput = () => {

    const inputRef = useRef();

    return <div className="border border-black/10 focus-within:border-black/30 flex items-center gap-1 px-2 shadow-xs w-80 rounded-lg h-9" onClick={() => { inputRef.current.focus() }}>
        {/* icon */}
        <span className="">
            <Search className="text-black/70" size={18} />
        </span>

        {/* input */}
        <input
            type="text"
            placeholder="Search file..."
            className="placeholder:text-black/60 placeholder:text-sm w-full focus-within:outline-none text-sm text-black/85 tracking-wide"
            ref={inputRef}
        />
    </div>
};

export default SearchInput;
