import { FileText, Headset, Image, LayoutDashboard, Settings, SquarePlay, Trash2 } from "lucide-react";
import React, { useState } from "react";

const Sidebar = () => {

    const menuData = [
        {
            Text: "Dashboard",
            Icon: <LayoutDashboard size={18} />
        },
        {
            Text: "Documents",
            Icon: <FileText size={18} />
        },
        {
            Text: "Image",
            Icon: <Image size={18} />
        }, {
            Text: "Videos",
            Icon: <SquarePlay size={18} />
        },
        {
            Text: "Audios",
            Icon: <Headset size={18} />
        },
        {
            Text: "Deleted files",
            Icon: <Trash2 size={18} />
        },
    ]

    const [selected, setSelected] = useState(0);


    return <div className="bg-[#FCFEFF] h-screen flex-col flex justify-between w-80 border border-black/5 border-l-0">

        <div>

            {/* sidebar header logo */}
            <div className="flex items-center gap-1 pl-4 pt-4 pb-3 border-b border-black/5">
                <img src="/logo.png" className="w-14" alt="Logo" />
                <span className="font-medium text-black/80">
                    BroSpace
                </span>
            </div>

            {/* sidbar tabs */}
            <div className="py-4">
                <span className="text-xs tracking-wide text-black/50 pl-4">
                    Menu
                </span>
                {
                    menuData.map((singleMenu, index) => {
                        return <div className={`${selected == index ? "bg-white border shadow-xs" : ""} flex items-center gap-1 py-[9px] mt-2 w-11/12 mx-auto rounded-lg px-[10px] border-black/20 text-sm cursor-pointer`}
                            key={index + singleMenu.Text}
                            onClick={() => setSelected(index)}
                        >
                            {/* icon */}
                            <span className={`${selected == index ? "text-black" : "text-[#9B9EA8]"}`}>
                                {
                                    singleMenu.Icon
                                }
                            </span>
                            {/* text */}
                            <span className={`${selected == index ? "text-black/90" : "text-[#9B9EA8]"}`} >
                                {
                                    singleMenu.Text
                                }
                            </span>
                        </div>
                    })
                }

            </div>
        </div>

        {/* settings tab */}
        <div className={`${selected == 6 ? "bg-white border shadow-xs" : ""} flex items-center gap-1 py-[9px] w-11/12 mx-auto mb-5 rounded-lg px-[10px] border-black/20 text-sm cursor-pointer`}
            onClick={() => setSelected(6)}
        >
            {/* icon */}
            <span className={`${selected == 6 ? "text-black" : "text-[#9B9EA8]"}`}>
                <Settings size={18} />
            </span>
            {/* text */}
            <span className={`${selected == 6 ? "text-black/90" : "text-[#9B9EA8]"}`}>
                Settings
            </span>
        </div>

    </div >;
};

export default Sidebar;
