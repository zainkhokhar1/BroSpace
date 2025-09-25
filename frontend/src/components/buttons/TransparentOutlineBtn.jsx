import React from "react";

const TransparentOutlineBtn = ({ Text, Icon }) => {
    return <button className="px-3 py-[7px] shadow-xs border border-black/10 cursor-pointer duration-200 rounded-xl flex items-center gap-1 mr-2 hover:bg-black/3">
        {
            Icon
        }
        <span className="text-sm text-black/70">
            {
                Text
            }
        </span>
    </button>;
};

export default TransparentOutlineBtn;
