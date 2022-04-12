import { useRef, useState } from "react";

/**
 * Using useState() to declare state variable inputNotes and declaring textAreaRef, which
 * is used to access textArea in Notesbox.The function handleChange is the logic that allows
 * text to be displayed in the textbox as the user types. The function handleSubmit is the logic
 * that copies the text in the textbox when the user hits the submit button.
 */

const NotesBoxHook = () => {
  const [inputNotes, setInputNotes] = useState("");
  const textAreaRef = useRef(null);

  const handleChangeNotes = (event) => {
    setInputNotes(event.target.value);
  };

  const handleSubmitNotes = (event) => {
    textAreaRef.current.select();
    const copiedBoolean = document.execCommand("copy");
    event.preventDefault();
    if (copiedBoolean === true) {
      window.alert("This note has been copied to the clipboard!");
    }
  };

  return {
    handleChangeNotes,
    inputNotes,
    handleSubmitNotes,
    textAreaRef
  };
};

export default NotesBoxHook;
