import UpdateSubmitHook from "../CustomHooks/updateAndSubmit";

/**
 * This function allows a user to search for SpaceX Launches by mission name. A user can type in any String
 * and any SpaceX mission that contains the inputted String will be returned. The clearSearch_state button
 * resets searchTerm_state to an empty String, and thus clears out the search box. To
 * reset the search, the user should click the submit button, after clicking the clear search button. 
 * Similarly, a user can manually clear out the search box and hit submit to reset the search. 
 */

export function MissionNameSearch(props) {

	const { onSubmit } = props;
	const { handleChange, clearSearch_state, this_state, handleSubmitSearch } = UpdateSubmitHook(onSubmit);

	return (
		<form onSubmit={handleSubmitSearch}>
			<div className="Filtering">
				<input
					className="Search_Mission_box"
					type="text"
					placeholder="Search For Any Past SpaceX Mission"
					value={this_state}
					onChange={handleChange}
				/>
				<button type="submit">Search</button>
				<button type="reset" onClick={clearSearch_state}>Clear Search</button>
			</div>
		</form>
	);



}