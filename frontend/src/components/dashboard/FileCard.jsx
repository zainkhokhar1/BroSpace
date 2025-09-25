import React from "react";
import {
    FileText,
    FileImage,
    FileArchive,
    FileAudio,
    FileVideo,
    FileSpreadsheet,
    File,
    FileType,
    FileCode,
} from "lucide-react";

const FileCard = ({ type, text, mbs }) => {
    const iconMap = {
        // docs
        docx: FileType,       // 📄 Word
        txt: FileText,        // 📝 Text file
        pdf: FileText,        // 📕 PDF (can replace with another icon if you prefer)
        pptx: FileType,       // 📊 PowerPoint
        xlsx: FileSpreadsheet, // 📈 Excel
        csv: FileSpreadsheet, // 📊 CSV

        // media
        jpg: FileImage,
        jpeg: FileImage,
        png: FileImage,
        gif: FileImage,

        // compressed
        zip: FileArchive,
        rar: FileArchive,

        // audio / video
        mp3: FileAudio,
        wav: FileAudio,
        mp4: FileVideo,
        mov: FileVideo,

        // dev
        js: FileCode,
        jsx: FileCode,
        html: FileCode,
        css: FileCode,
    };

    // pick icon based on type (fallback: generic File)
    const Icon = iconMap[type?.toLowerCase()] || File;

    return (
        <div className="flex items-center gap-3 rounded-xl border-[1.7px] border-gray-200 bg-white pl-2 pr-4 py-3 shadow-xs w-64">
            {/* Icon */}
            <div className="flex h-10 min-w-10 items-center justify-center rounded-md bg-gray-100">
                <Icon className="h-6 w-6 text-gray-600" />
            </div>

            {/* File details */}
            <div className="flex flex-col gap-[6px]">
                <h4 className="text-sm font-medium text-gray-900 line-clamp-1 break-all">
                    {text}
                </h4>
                <p className="text-xs text-gray-500 line-clamp-1 break-all">
                    {mbs} • {type.toUpperCase()}
                </p>
            </div>
        </div>
    );
};

export default FileCard;
