import React from 'react';
import ReactPlayer from "react-player";
import Textbox from '../components/Textbox'

export function Launches({launch}){
    return (
        <div className="launch">
            <div className="launch_data">
                <p>Mission Name: {launch.mission_name}</p>
                
            </div>
            <div className="launch_data">
                <p>Launch Date: {launch.launch_date_local}</p>
                
            </div>
            <div className="launch_data">
                <p>Launch Site: {launch.launch_site.site_name_long}</p>
                
            </div>
            <div className="launch_data">
                <p>Rocket Name: {launch.rocket.rocket_name}</p>
                
            </div>
            <div className="video_link">
                <ReactPlayer
                url={launch.links.video_link}
                controls={true}
                />
            </div>
            <br></br>
            <Textbox /> 
            <hr className="solid"></hr>
        </div>
    )
}