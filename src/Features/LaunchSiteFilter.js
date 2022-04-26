import styles from "./LaunchSiteFilter.module.css";

const LaunchSiteFilter = (props) => {
  const { setLaunchSiteFilter } = props;

  return (
    <form
      onChange={(event) => setLaunchSiteFilter(event.target.value)}
      className={styles.launchSite__filter}
    >
      <label htmlFor="filter_by_launchSite">Filter By Launch Site: </label>
      <input
        type="radio"
        name="site_selection"
        id="Kwajalein Atoll"
        value="Kwajalein Atoll"
      />
      <label htmlFor="Kwajalein Atoll">Kwajalein Atoll</label>
      <input
        type="radio"
        name="site_selection"
        id="Cape Canaveral"
        value="Cape Canaveral"
      />
      <label htmlFor="Cape Canaveral">Cape Canaveral</label>
      <input
        type="radio"
        name="site_selection"
        id="Kennedy Space Center"
        value="Kennedy Space Center"
      />
      <label htmlFor="Kennedy Space Center">Kennedy Space Center</label>
      <input
        type="radio"
        name="site_selection"
        id="Show All"
        value=""
        defaultChecked
      />
      <label htmlFor="Show All">Show All</label>
    </form>
  );
};

export default LaunchSiteFilter;
