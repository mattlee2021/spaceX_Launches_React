import styles from "./LaunchSiteFilter.module.css";

const LaunchSiteFilter = (props) => {
  const { setLaunchSiteFilter } = props;

  return (
    <form
      onChange={(event) => setLaunchSiteFilter(event.target.value)}
      className={styles.launchSite__filter}
    >
      <label htmlFor="filter_by_launchSite">Filter By Launch Site: </label>
      <input type="radio" name="site_selection" value="Kwajalein Atoll" />
      <label>Kwajalein Atoll</label>
      <input type="radio" name="site_selection" value="Cape Canaveral" />
      <label>Cape Canaveral</label>
      <input type="radio" name="site_selection" value="Kennedy Space Center" />
      <label>Kennedy Space Center</label>
      <input type="radio" name="site_selection" value="" defaultChecked />
      <label>Show All</label>
    </form>
  );
};

export default LaunchSiteFilter;
