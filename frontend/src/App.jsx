
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Upload } from 'lucide-react'
import PurpleBtn from './components/buttons/PurpleBtn'

function App() {

  return (
    <>
      <div className='bg-white min-h-screen text-black/95 selection:bg-purple-200 p-2'>
        My Cloud storage.

        <PurpleBtn
          Text={"Upload File"}
          Icon={<Upload size={20} />}
        />

      </div>
      <Toaster />
    </>
  )
}

export default App
