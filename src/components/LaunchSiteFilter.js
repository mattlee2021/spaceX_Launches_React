import { useState } from "react";
/**
 * This component displays a form with radio buttons so that a user can filter by one of three SpaceX
 * launch sites. I chose to use radio buttons because the SpaceX GraphQL find query takes a single 
 * String input. Thus, I only one input should be send to the API and radio buttons let a user choose 
 * mutually exclusive options. in the return block, I am passing the value of each input tag to App.js,
 * which then sends the value to the GraphQL API. The SpaceX GraphQL API will not filter by a specific 
 * input when an empty string is passed in, so for the Show All option, the value is an empty String.
 */


export function LaunchSiteFilter(props) {
    const [launchSite_state, launchSite_set] = useState("");
    const { onSubmit } = props; 

    const handleChange_launchSite = (event) => {
        launchSite_set(event.target.value)

    }
    const onSubmit_launchSite = (event) => {
        event.preventDefault()
        onSubmit(launchSite_state);
    }

    return (
        <form onSubmit={onSubmit_launchSite} onChange={handleChange_launchSite} className="Filtering">
            <label htmlFor="filter_by_launchSite">Filter By Launch Site: </label>
            <input type="radio" name="site_selection" value="Kwajalein Atoll"></input>
            <label>Kwajalein Atoll</label>
            <input type="radio" name="site_selection" value="Cape Canaveral"></input>
            <label>Cape Canaveral</label>
            <input type="radio" name="site_selection" value="Kennedy Space Center"></input>
            <label>Kennedy Space Center</label>
            <input type="radio" name="site_selection" value=""></input> 
            <label>Show All</label>
            <button type="submit">Filter</button>
        </form>
    );
}

