import { useState } from "react";

export function Search_component(props) {
    const [searchTerm_state, setSearchTerm] = useState("");
    const {onSubmit}= props;

     const handleChange = (event) => {
       setSearchTerm(event.target.value)
     }

     const clearSearch_state = () => {
       setSearchTerm("")
     }

     const onSubmit_form = (event) => {
       event.preventDefault();
       onSubmit(searchTerm_state);
     }

     return (
      <form onSubmit={onSubmit_form}> 
       <div className="Filtering">
         <input 
          className="Search_Mission_box"
           type="text"
           placeholder="Search For Any Past SpaceX Mission"
           value={searchTerm_state}
           onChange={handleChange}
         />
         <button type="submit">Search</button>
         <button type="reset" onClick={clearSearch_state}>Clear Search</button>
       </div>
       </form>
     );
   }