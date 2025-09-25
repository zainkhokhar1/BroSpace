import React from "react";
import PurpleBtn from "../buttons/PurpleBtn.jsx";
import { Plus, Upload } from "lucide-react";
import TransparentOutlineBtn from "../buttons/TransparentOutlineBtn.jsx";

const Header = () => {
    return <div className="flex justify-between items-center pt-2 pl-2 mb-7">
        {/* left side content */}
        <div className="space-y-1">
            <h3 className="text-lg font-medium text-black/90">
                All files
            </h3>
            <h6 className="text-sm text-black/70">
                All of your files are displayed here.
            </h6>
        </div>

        {/* right side content */}
        <div className="flex items-center gap-3">
            <PurpleBtn Text="Upload file" Icon={<Upload size={18} color="white" />} />

            <TransparentOutlineBtn Text="Create" Icon={<Plus size={18} />} />

        </div>
    </div>;
};

export default Header;
