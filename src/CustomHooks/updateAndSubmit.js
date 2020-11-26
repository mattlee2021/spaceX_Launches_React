import { useState } from "react";

/**
 * This hook takes the parameter onSubmit that is passed initially from App.js to the sorting, searching,
 * and filtering features. Those features then pass onSubmit to this hook so that this_state or the 
 * event.target.value can be passed back to App.js, which then uses each feature's respective information
 * in LaunchesContainer.
 * 
 */

const UpdateSubmitHook = (onSubmit) => {

    const [this_state, set_state] = useState("");

    const handleChange = (event) => {
        set_state(event.target.value);
    };

    const handleSubmitSearch = (event) => {
        event.preventDefault()
        onSubmit(this_state);
    }
    
    const OneClickSubmit = (event) => {
        onSubmit(event.target.value);
    }
   

    const clearSearch_state = () => {
        set_state("")
    }

    return {
        this_state,
        handleChange,
        handleSubmitSearch,
        OneClickSubmit,
        clearSearch_state
    }
}

export default UpdateSubmitHook