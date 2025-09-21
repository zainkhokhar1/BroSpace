
import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Upload } from 'lucide-react'
import PurpleBtn from './components/buttons/PurpleBtn'
import axios from 'axios';

function App() {

  const [imageUrl, setImageUrl] = useState();

  const handleDelete = async () => {
    let name = "file-1758446794800-logo.png";
    const result = await axios.delete(
      "http://192.168.0.105:3000/delete", {
      data: { fileName: name }
    });
    if (result.data) {
      console.log("Deleted file successfully");
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
