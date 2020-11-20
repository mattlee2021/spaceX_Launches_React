import { useRef, useState } from "react";

/**
 * Using useState() to declare state variable input_notes and declaring textAreaRef, which
 * is used to access textArea in Notesbox.The function handleChange is the logic that allows 
 * text to be displayed in the textbox as the user types. The function handleSubmit is the logic 
 * that copies the text in the textbox when the user hits the submit button.
 */

const useForm = () => {
    const[input_notes, setInput_notes]= useState({});
    const textAreaRef = useRef(null);

    const handleChange = (event) => {
        setInput_notes(input_notes => ({ ...input_notes, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        textAreaRef.current.select();
        const copied_boolean = document.execCommand('copy');
        event.preventDefault();
        if (copied_boolean===true){
            alert(`This note has been copied to the clipboard!`);
        }
    }
    
return {
    handleChange,
    input_notes,
    handleSubmit,
    textAreaRef
    }   
};

export default useForm;

