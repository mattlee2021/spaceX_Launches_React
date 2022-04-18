import styles from "./Notesbox.module.css";
import { useState } from "react";

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
