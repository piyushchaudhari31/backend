import React, { useState } from 'react'
import FaceDetection from './component/FaceDetection'
import Songs from './component/Songs'

const App = () => {
  const [song , setsong] = useState([])
  return (
    <div>
      <FaceDetection setsong={setsong}/>
      <Songs song={song}/>
    </div>
  )
}

export default App
