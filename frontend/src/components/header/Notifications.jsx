import { Bell } from "lucide-react";
import React from "react";

const Notifications = () => {
    return <div className="p-2 shadow-xs hover:shadow-md duration-200 cursor-pointer border border-black/20 rounded-lg">
        <Bell size={18} className="text-black/80" />
    </div>;
};

export default Notifications;
