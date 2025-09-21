import React from "react";


const PurpleBtn = ({ Text, Icon }) => {
    return <div className="flex h-10 w-32 gap-2 cursor-pointer rounded-lg bg-[#8144fc] hover:bg-[#845cd3] text-white font-semibold items-center justify-center">
        <span>
            {
                Icon
            }
        </span>
        <span className="font-semibold text-xs leading-2">
            {
                Text
            }
        </span>
    </div>;
};

export default PurpleBtn;
