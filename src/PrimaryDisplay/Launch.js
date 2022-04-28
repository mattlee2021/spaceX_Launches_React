import React from "react";
import ReactPlayer from "react-player";
import NotesBox from "../Features/Notesbox";
import styles from "./Launch.module.css";

const Launch = ({ launch }) => {
  const launchUTCTime = new Date(launch.launch_date_utc);
  const launchLocalTime = launchUTCTime.toLocaleString();
  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    <div className={styles.launch__items}>
      <p>Mission Name: {launch.mission_name}</p>
      <p>Launch Date: {launchLocalTime + " " + localTimeZone}</p>
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

export default Launch;
