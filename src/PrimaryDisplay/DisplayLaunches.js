import React from "react";
import ReactPlayer from "react-player";
import NotesBox from "../Features/Notesbox";
import styles from "./DisplayLaunches.module.css";
/**
 *
 * @param {GraphQL Data} launch One subset of data from the SpaceX GraphQL API.
 * This function returns HTML that is used to display different information about a
 * launch and a YouTube video of the launch. I am also using the <NotesBox /> component,
 * which is a note taking feature that a user can use when watching one of the launch videos.
 */

const Launches = ({ launch }) => {
  return (
    <div className={styles.launch__items}>
      <p>Mission Name: {launch.mission_name}</p>
      <p>Launch Date: {launch.launch_date_local}</p>
      <p>Launch Site: {launch.launch_site.site_name_long}</p>
      <p>Rocket Name: {launch.rocket.rocket_name}</p>

      <ReactPlayer
        url={launch.links.video_link}
        controls
        className={styles.launch__video}
      />
      <NotesBox />
      <hr className={styles.line__solid} />
    </div>
  );
};

export default Launches;
