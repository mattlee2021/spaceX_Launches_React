import { useState } from "react";

const UpdateSubmitHook = (onSubmit) => {

    const [this_state, set_state] = useState("");
    //const { onSubmit1 } = props;

    const handleChange1 = (event) => {
        set_state(event.target.value);
    };
    const handleSubmit1 = (event) => {
        event.preventDefault()
        //console.log(props)
        onSubmit(this_state);
    }

    const clearSearch_state = () => {
        set_state("")
    }

    return {
        this_state,
        handleChange1,
        handleSubmit1,
        clearSearch_state
    }
}

export default UpdateSubmitHook