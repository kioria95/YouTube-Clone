import React from 'react'
import './Recommended.css'
import VideoCard from "./VideoCard"

function Recommended() {
    return (
        <div className="recommended">
            <h2>Recommended</h2>

            <div className="recommended__videos">
                <VideoCard 
                title ="How To Be Awesome in life"
                 image ="https://kenkioria-d4dc3.web.app/images/fresh.jpg"
                  channel ="Kioria Uploads"
                   views ="5B Views"
                    timestamp ="2/2/2030"
                     channelImage ="https://kenkioria-d4dc3.web.app/images/fresh.jpg"
                
                />

            </div>
        </div>
    )
}

export default Recommended
