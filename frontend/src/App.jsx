
import React, { useRef, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Upload } from 'lucide-react'
import PurpleBtn from './components/buttons/PurpleBtn'
import axios from 'axios';

function App() {

  const [imageUrl, setImageUrl] = useState();
  const downloadRef = useRef(null);

  const handleDelete = async () => {
    let name = "file-1758450584953-v14044g50000d2d45bfog65vgri9nf40.mp4";
    const result = await axios.delete(
      "http://192.168.0.105:3000/delete", {
      data: { fileName: name }
    });
    if (result.data) {
      console.log("Deleted file successfully");
    }
  }

  const handleDownload = async () => {
    let name = "file-1758452885910-gradient.avif";
    const result = await axios.get(
      `http://192.168.0.105:3000/download/${name}`, {
      responseType: "blob"
    });
    if (result.data) {
      const blob = new Blob([result.data]);
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = "file.avif";
      link.click()
      console.log("Downloaded file successfully");
    }
  }

  return (
    <>
      <div className='bg-white min-w-screen flex flex-col items-center justify-center gap-3 min-h-screen text-black/95 selection:bg-purple-200 p-2'>

        <h2 className='text-4xl' style={{ fontSize: "30px", fontWeight: "900", color: "lightslategray" }}>
          Upload file
        </h2>

        <PurpleBtn
          Text={"Upload File"}
          Icon={<Upload size={20} />}
          setImageUrl={setImageUrl}
        />

        <button
          ref={downloadRef}
          className="flex h-10 w-32 max-w-40 gap-2 cursor-pointer rounded-lg !bg-[#8144fc] hover:bg-[#845cd3] !text-white font-semibold items-center justify-center relative"
          onClick={handleDownload}
        >
          Download File
        </button>

        {
          imageUrl && <div className='h-40 w-92 object-contain'>
            <img src={imageUrl} alt="Image-preview" />
          </div>
        }

        <button className="flex h-10 max-w-40 gap-2 cursor-pointer rounded-lg bg-[#8144fc] hover:bg-[#845cd3] text-white font-semibold items-center justify-center relative"
          onClick={handleDelete}
        >
          Delete File
        </button>

      </div >
      <Toaster />
    </>
  )
}

export default App
