import {useState } from "react";

export function Sort_component(props){

    const[sort_state, setSort_state]= useState(""); 
    const {onSubmit}= props;

    const handleChange_Sort = (event) => {
        setSort_state(event.target.value)
      }
 
      const onSubmit_Sort = (event) => {
        event.preventDefault();
        onSubmit(sort_state);
      }
        
    
    return (
        <form onSubmit={onSubmit_Sort} className="Filtering">  
            <label htmlFor="sorting">Sort By: </label>
            <select onChange={handleChange_Sort} className="sort_box">
                    <option value="">None</option>
                    <option value="site_name_long">Launch Site</option>
                    <option value="launch_date_local">Launch Date</option>
                    <option value="mission_name">Mission Name</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
}