import React from "react";
import SearchInput from "../header/SearchInput.jsx";
import Notifications from "../header/Notifications.jsx";
import { ChevronDown } from "lucide-react";

const Header = () => {
    return <div className="flex items-center justify-between px-4 pt-2 pb-3 border border-black/5 border-l-0">
        <SearchInput />

        <div className="flex items-center gap-3">

            <div className="flex items-center gap-3">
                <Notifications />
                <span className="min-h-full bg-black/15 w-px">&nbsp;</span>
            </div>

            <div className="flex items-center gap-2 w-36 cursor-pointer pr-2 py-1 hover:bg-black/3 rounded-full duration-200">
                {/* user profile */}
                <div className="flex items-center gap-1 ">
                    <div className="avatar avatar-online">
                        <div className="w-9 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                        </div>
                    </div>
                </div>
                {/* show name */}
                <h2 className="text-black/80 line-clamp-1 break-all w-full text-sm">
                    Zain ul abideen
                </h2>
                <ChevronDown className="text-black/80" size={36} />
            </div>

        </div>
    </div>;
};

export default Header;
