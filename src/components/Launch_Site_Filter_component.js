import {useState } from "react";


export function LaunchSite_Filter(props){
    const[launchSite_state, launchSite_set]= useState(""); 

    const {onSubmit}= props;

    const handleChange_launchSite = (event) => {
        launchSite_set(event.target.value)
        
      }
      const onSubmit_launchSite = (event) => {
        event.preventDefault()
        onSubmit(launchSite_state);
      }
        
    
    return (
        //This GraphQL API only lets you filter by one input
        <form onSubmit={onSubmit_launchSite} onChange={handleChange_launchSite} className="Filtering">  
            <label htmlFor="filter_by_launchSite">Filter By Launch Site: </label>
                <input  type="radio" name="site_selection" value="Kwajalein Atoll"></input>
                <label>Kwajalein Atoll</label>
                <input type="radio" name="site_selection" value="Cape Canaveral"></input>
                <label>Cape Canaveral</label>
                <input  type="radio" name="site_selection" value="Kennedy Space Center"></input>
                <label>Kennedy Space Center</label>
                <input  type="radio" name="site_selection" value=""></input>
                <label>Show All</label>

            <button type="submit">Filter</button>
        </form>
    );
}

