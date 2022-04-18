import styles from "./MissionNameSearch.module.css";
import { useState } from "react";

const MissionNameSearch = (props) => {
  const { setMissionNameSearch } = props;
  const [searchInput, setSearchInput] = useState("");
  return (
    <form>
      <input
        className={styles.search__input}
        type="text"
        placeholder="Search For Any Past SpaceX Mission"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button
        onClick={(event) => {
          setMissionNameSearch(searchInput);
          event.preventDefault();
        }}
        type="submit"
      >
        Search
      </button>
      <button type="reset" onClick={() => setSearchInput("")}>
        Clear Search
      </button>
    </form>
  );
};

export default MissionNameSearch;
