import React from 'react';

export function Launches({launch}){
    return (
        <div className="launch">
            <div className="mission_name">
                <p>Mission Name: {launch.mission_name}</p>
            </div>

            <div className="launch_date_local">
            <p>Launch Date: {launch.launch_date_local}</p>
                
            </div>
            <div className="launch_site">
                <p>Launch Site: {launch.launch_site.site_name_long}</p>
                
            </div>
            <div className="rocket_name">
                <p>Rocket Name: {launch.rocket.rocket_name}</p>
                
            </div>
            <div className="video_link">
                <a href={launch.links.video_link}>Link to video</a>
                {/*Have associated mission name for link*/} 
            </div>
        </div>
    )
}