import React from "react";
import SearchInput from "../header/SearchInput.jsx";
import Notifications from "../header/Notifications.jsx";

const Header = () => {
    return <div className="flex items-center justify-between px-4 pt-3 pb-4 border border-black/5 border-l-0">
        <SearchInput />

        <div className="flex items-center gap-3">
            <Notifications />
            <span className="min-h-full bg-black/15 w-px">&nbsp;</span>
        </div>

    </div>;
};

export default Header;
