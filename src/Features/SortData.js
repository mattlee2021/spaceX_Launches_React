import UpdateSubmitHook from "../CustomHooks/updateAndSubmit";
import styles from "./SortData.module.css";

/**
 * This function sorts the displayed information from the SpaceX GraphQL API. Since the Launch Site and
 * Mission Name fields are composed of words, this function will sort alphabetically according to the
 * selected choice. For Launch Date, this function will sort the the launches in chronological order.
 */

const SortDataFeature = (props) => {
  const { onSubmit } = props;
  const { oneClickSubmit } = UpdateSubmitHook(onSubmit);

  return (
    <form>
      <label htmlFor="sorting">Sort By: </label>
      <select onChange={oneClickSubmit} className={styles.sort_input}>
        <option value="">None</option>
        <option value="site_name_long">Launch Site</option>
        <option value="launch_date_local">Launch Date</option>
        <option value="mission_name">Mission Name</option>
      </select>
    </form>
  );
};

export default SortDataFeature;
