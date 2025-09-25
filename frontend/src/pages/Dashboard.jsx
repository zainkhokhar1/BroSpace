import React from "react";
import Header from "../components/dashboard/Header";
import RecentlyModified from "../components/dashboard/RecentlyModified";

const Dashboard = () => {
    return <div>
        <Header />

        <div className="flex">

            {/* Recently viewed files */}
            <RecentlyModified />

            {/* Storage usage */}
            <div>
                Storage Usage
            </div>

        </div>

    </div>;
};

export default Dashboard;
