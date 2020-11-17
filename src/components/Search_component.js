import { useState } from "react";

export function Search_component(props) {
    const [searchTerm, setSearchTerm] = useState("");

     const handleChange = (event) => {
       setSearchTerm(event.target.value)
       
     }

     const onSubmit_form = (event) => {
       event.preventDefault();
       const {onSubmit}= props;
       onSubmit(searchTerm);
     }

     return (
      <form onSubmit={onSubmit_form}> 
       <div className="Search_Mission">
         <input 
          className="Search_Mission_box"
           type="text"
           placeholder="Search For Any Past SpaceX Mission"
           value={searchTerm}
           onChange={handleChange}
         />
         <button type="submit">Search</button>
       </div>
       </form>
     );
   }