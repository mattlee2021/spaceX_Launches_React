import { useState } from "react";

/**
 * This hook takes the parameter onSubmit that is passed initially from App.js to the sorting, searching,
 * and filtering features. Those features then pass onSubmit to this hook so that thisState or the
 * event.target.value can be passed back to App.js, which then uses each feature's respective information
 * in LaunchesContainer.
 *
 */

const UpdateSubmitHook = (onSubmit) => {
  const [thisState, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    onSubmit(thisState);
  };

  const oneClickSubmit = (event) => {
    onSubmit(event.target.value);
  };

  const clearSearchState = () => {
    setState("");
  };

  return {
    thisState,
    handleChange,
    handleSubmitSearch,
    oneClickSubmit,
    clearSearchState
  };
};

export default UpdateSubmitHook;
