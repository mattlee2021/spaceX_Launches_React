import styles from "./MissionNameSearch.module.css";
import { useState } from "react";

/**
 * This function allows a user to search for SpaceX Launches by mission name. A user can type in any String
 * and any SpaceX mission that contains the inputted String will be returned. The clearSearchState button
 * resets searchTerm_state to an empty String, and thus clears out the search box. To
 * reset the search, the user should click the submit button, after clicking the clear search button.
 * Similarly, a user can manually clear out the search box and hit submit to reset the search.
 */

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
