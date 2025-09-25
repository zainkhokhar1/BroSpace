import React from "react";
import FileCard from "./FileCard";
import { MoveRight } from "lucide-react";
const files = [
    {
        text: "Campaign Analysis - Q3.docx",
        mbs: "2.7 MB",
        type: "docx",
    },
    {
        text: "Team_Presentation_Final.pptx",
        mbs: "4.1 MB",
        type: "pptx",
    },
    {
        text: "Product_Roadmap_2025.pdf",
        mbs: "1.9 MB",
        type: "pdf",
    },
];


const RecentlyModified = () => {
    return <div className="w-3/4 pl-2">
        <div className="text-lg flex items-center justify-between pr-4 font-medium text-black/80">
            <h3>Recently Modified</h3>
            <div className="flex items-center gap-1 text-sm text-purple-600 hover:text-purple-900 duration-100 hover:underline w-fit cursor-pointer pr-2">
                <h6>
                    View all
                </h6>
                {/* icon show here */}
                <MoveRight size={14} />
            </div>
        </div>

        <div className="flex items-center gap-3 my-2 mt-3">
            {
                files.map((singleFile) => <FileCard mbs={singleFile.mbs} text={singleFile.text} type={singleFile.type} />)
            }
        </div>
    </div>;
};

export default RecentlyModified;
