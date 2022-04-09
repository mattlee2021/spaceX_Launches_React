import React from "react";
import ReactPlayer from "react-player";
import NotesBox from "../Features/Notesbox";
/**
 *
 * @param {GraphQL Data} launch One subset of data from the SpaceX GraphQL API.
 * This function returns HTML that is used to display different information about a
 * launch and a YouTube video of the launch. I am also using the <NotesBox /> component,
 * which is a note taking feature that a user can use when watching one of the launch videos.
 */

const Launches = ({ launch }) => {
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
        <ReactPlayer url={launch.links.video_link} controls />
      </div>
      <br />
      <NotesBox />
      <hr className="line__solid" />
    </div>
  );
};

export default Launches;
