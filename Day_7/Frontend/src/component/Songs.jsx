import React, { useState } from 'react'
import '../component/Song.css'

const Songs = () => {

    const [song , setsong] = useState([
        {
            title:"Test_title",
            artist:"Test_Artist",
            url:"test_url"
        },
        {
            title:"Test_title",
            artist:"Test_Artist",
            url:"test_url"
        },
        {
            title:"Test_title",
            artist:"Test_Artist",
            url:"test_url"
        },
        {
            title:"Test_title",
            artist:"Test_Artist",
            url:"test_url"
        },
    ])

    const moodsong = song.map((song,idx)=>{
        return(
           
            <div key={idx} className='song_card'>
                
                <div className="title">
                    <h3>{song.title}</h3>
                    <p>{song.artist}</p>
                </div>

                <div className="play_pause_btn">
                    <i className="ri-pause-line"></i>
                    <i className="ri-play-circle-line"></i>
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
