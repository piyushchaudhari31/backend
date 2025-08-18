import React, { useState } from 'react'
import '../component/Song.css'

const Songs = ({song}) => {

    const [isplaying , setisplaying] = useState(null)

    const handlePlayPause = (index)=>{
        if(isplaying === index){
            setisplaying(null)
        }
        else{
            setisplaying(index)
        }
    }

    

    const moodsong = song.map((song,index)=>{
        return(
           
            <div key={index} className='song_card'>
                
                <div className="title">
                    <div className="song_name">
                        <h3>{song.title}</h3>
                        <p>{song.artist}</p>
                    </div>
                    
                    
                </div>

                <div className="play_pause_btn">

                    
                    <button onClick={()=>handlePlayPause(index)}>
                        {isplaying === index ?
                        <>
                            <i className="ri-pause-line"></i>
                            <audio src={song.audio} autoPlay></audio>
                        </>:
                        <>
                            <i className="ri-play-circle-line"></i>
                        </>}
                    </button>
                    
                </div>




            
            </div>        
        )
    })
    
    

  return (
    <div className='mood_songs'>
        <h1>Recomnded song</h1>
      {moodsong}
    </div>
  )
}

export default Songs
