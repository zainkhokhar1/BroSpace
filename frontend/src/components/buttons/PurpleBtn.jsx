import React, { useEffect, useState } from "react";
import axios from "axios";

const FileInput = ({ Text, Icon, setImageUrl }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let url = URL.createObjectURL(e.target.files[0]);
            setImageUrl(url);
            setSelectedFile(e.target.files[0])
        }
    }

    const fileSendToApi = async () => {
        try {
            let formData = new FormData();
            formData.append("file", selectedFile);
            // formData.append("ownerId", "1")
            const responseFromDB = await axios.post("http://192.168.0.105:3000/upload",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );
            if (responseFromDB?.data) {
                console.log(responseFromDB.data)
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        // if the file is available then only send that file to the backend otherwise skip.
        if (selectedFile) {
            fileSendToApi()
        }

    }, [selectedFile])

    return (
        <div className="flex h-10 max-w-40 gap-2 cursor-pointer rounded-lg bg-[#8144fc] hover:bg-[#845cd3] text-white font-semibold items-center justify-center relative">
            <label className="w-full cursor-pointer flex items-center justify-center z-20">
                <input
                    type="file"
                    onChange={handFileChange}
                    className="opacity-0"
                />
            </label>
            <div className="absolute flex items-center justify-center gap-2 inset-0">
                {Icon && <span>{Icon}</span>}
                <span className="font-semibold leading-2 text-xs ml-1">
                    {Text}
                </span>
            </div>
        </div>
    );
};

export default FileInput;