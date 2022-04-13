import NotesBoxHook from "../CustomHooks/NotesBoxHook";
import styles from "./Notesbox.module.css";
/**
 * This is a functional component of the notes textbox. A custom hook is imported to
 * handle updating the words displayed in the textbox and copying the text onto the user's
 * clipboard. This component is used in launches.js.
 */

const NotesBox = () => {
  const { handleChangeNotes, inputNotes, handleSubmitNotes, textAreaRef } =
    NotesBoxHook();

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
