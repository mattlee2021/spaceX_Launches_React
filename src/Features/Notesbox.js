import styles from "./Notesbox.module.css";
import { useRef, useState } from "react";
/**
 * This is a functional component of the notes textbox. A custom hook is imported to
 * handle updating the words displayed in the textbox and copying the text onto the user's
 * clipboard. This component is used in launches.js.
 */

const NotesBox = () => {
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

  return (
    <form onSubmit={handleSubmitNotes} className={styles.Notes_form}>
      <div>
        <label>Notes</label>
        <br />
        <br />
        <textarea
          value={inputNotes}
          onChange={handleChangeNotes}
          className={styles.notes__input}
          ref={textAreaRef}
        />
      </div>
      <br />
      <button>Copy This Note To Clipboard</button>
    </form>
  );
};

export default NotesBox;
