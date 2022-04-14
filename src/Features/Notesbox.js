import styles from "./Notesbox.module.css";
import { useState } from "react";
/**
 * This is a functional component of the notes textbox. A custom hook is imported to
 * handle updating the words displayed in the textbox and copying the text onto the user's
 * clipboard. This component is used in launches.js.
 */

const NotesBox = () => {
  const [inputNotes, setInputNotes] = useState("");

  const handleClipboardCopy = () => {
    navigator.clipboard.writeText(inputNotes);
  };

  return (
    <form className={styles.Notes_form}>
      <div>
        <label>Notes</label>
        <br />
        <br />
        <textarea
          value={inputNotes}
          onChange={(event) => {
            setInputNotes(event.target.value);
          }}
          className={styles.notes__input}
        />
      </div>
      <br />
      <button type="button" onClick={handleClipboardCopy}>
        Copy This Note To Clipboard
      </button>
    </form>
  );
};

export default NotesBox;
