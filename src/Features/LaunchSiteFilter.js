import UpdateSubmitHook from "../CustomHooks/updateAndSubmit";
/**
 * This component displays a form with radio buttons so that a user can filter by one of three SpaceX
 * launch sites. I chose to use radio buttons because the SpaceX GraphQL find query takes a single
 * String input. Thus, I only one input should be send to the API and radio buttons let a user choose
 * mutually exclusive options. in the return block, I am passing the value of each input tag to App.js,
 * which then sends the value to the GraphQL API. The SpaceX GraphQL API will not filter by a specific
 * input when an empty string is passed in, so for the Show All option, the value is an empty String.
 */

const LaunchSiteFilter = (props) => {
  const { onSubmit } = props;
  const { oneClickSubmit } = UpdateSubmitHook(onSubmit);

  return (
    <form onChange={oneClickSubmit} className="user-input__elements">
      <label htmlFor="filter_by_launchSite">Filter By Launch Site: </label>
      <input type="radio" name="site_selection" value="Kwajalein Atoll" />
      <label>Kwajalein Atoll</label>
      <input type="radio" name="site_selection" value="Cape Canaveral" />
      <label>Cape Canaveral</label>
      <input type="radio" name="site_selection" value="Kennedy Space Center" />
      <label>Kennedy Space Center</label>
      <input type="radio" name="site_selection" value="" />
      <label>Show All</label>
    </form>
  );
};

export default LaunchSiteFilter;
