import React from "react";

const PurpleBtn = ({ Text, Icon }) => {
    return <button className="px-2 py-[8px] shadow-lg cursor-pointer hover:bg-[#9b65ff] duration-200 rounded-xl bg-[#8342FE] flex items-center gap-2 text-black/60">
        {
            Icon
        }
        <span className="text-sm text-white">
            {
                Text
            }
        </span>
    </button>;
};

export default PurpleBtn;
