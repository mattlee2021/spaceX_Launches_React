import UpdateSubmitHook from "../CustomHooks/updateAndSubmit";

/**
 * This function sorts the displayed information from the SpaceX GraphQL API. Since the Launch Site and 
 * Mission Name fields are composed of words, this function will sort alphabetically according to the 
 * selected choice. For Launch Date, this function will sort the the launches in chronological order. 
 */

export function SortDataFeature(props) {

  const { onSubmit } = props;
  const { handleChange, handleSubmit } = UpdateSubmitHook(onSubmit);

  return (
    <form onSubmit={handleSubmit} className="Filtering">
      <label htmlFor="sorting">Sort By: </label>
      <select onChange={handleChange} className="sort_box">
        <option value="">None</option>
        <option value="site_name_long">Launch Site</option>
        <option value="launch_date_local">Launch Date</option>
        <option value="mission_name">Mission Name</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );



}