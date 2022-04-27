import styles from "./SortData.module.css";

const SortData = (props) => {
  const { setSortCriteria } = props;
  // similar to launchsitefilter
  // setLaunchSiteFilter getting called with the correct property;
  // snapshot -> snapshot test and logic testing
  // snapshot too since it is HTML

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
