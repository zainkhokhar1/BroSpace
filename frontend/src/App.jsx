
import React, { useRef, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import axios from 'axios';
import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import Images from './pages/Images';
import Videos from './pages/Videos';
import Audios from './pages/Audios';
import DeleteFiles from './pages/DeleteFiles';
import Settings from './pages/Settings';

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
    <Router>
      <>
        <div className='bg-white w-screen overflow-x-hidden min-h-screen text-black/95 selection:bg-purple-200 flex items-start'>

          {/* sidebar */}
          <Sidebar />

          <div className='bg-[#FDFDFD] w-full min-h-screen'>

            {/* header */}
            <Header />

            {/* main content pages */}
            <div className='p-2'>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/documents' element={<Documents />} />
                <Route path='/images' element={<Images />} />
                <Route path='/videos' element={<Videos />} />
                <Route path='/audios' element={<Audios />} />
                <Route path='/deleted-files' element={<DeleteFiles />} />
                <Route path='/settings' element={<Settings />} />
              </Routes>
            </div>
          </div>

        </div>
        <Toaster />
      </>

    </Router>
  )
}

export default App
