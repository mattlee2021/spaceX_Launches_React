import { useState } from "react";

/**
 * This hook takes the parameter onSubmit that is passed initially from App.js to the sorting, searching,
 * and filtering feature. Those features then pass onSubmit to this hook so that this_state can be passed
 * back to App.js, which then uses each feature's respective state in LaunchesContainer.
 * 
 */

const UpdateSubmitHook = (onSubmit) => {

    const [this_state, set_state] = useState("");

    const handleChange = (event) => {
        set_state(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        //console.log(props)
        onSubmit(this_state);
    }

    const clearSearch_state = () => {
        set_state("")
    }

    return {
        this_state,
        handleChange,
        handleSubmit,
        clearSearch_state
    }
}

export default UpdateSubmitHook