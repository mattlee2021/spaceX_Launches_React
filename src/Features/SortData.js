import styles from "./SortData.module.css";

/**
 * This function sorts the displayed information from the SpaceX GraphQL API. Since the Launch Site and
 * Mission Name fields are composed of words, this function will sort alphabetically according to the
 * selected choice. For Launch Date, this function will sort the the launches in chronological order.
 */

const SortData = (props) => {
  const { setSortCriteria } = props;

  return (
    <form>
      <label>Sort By: </label>
      <select
        onChange={(event) => {
          setSortCriteria(event.target.value);
        }}
        className={styles.sort_input}
      >
        <option value="">None</option>
        <option value="site_name_long">Launch Site</option>
        <option value="launch_date_local">Launch Date</option>
        <option value="mission_name">Mission Name</option>
      </select>
    </form>
  );
};

export default SortData;
