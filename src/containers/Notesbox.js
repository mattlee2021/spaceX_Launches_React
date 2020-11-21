import useForm from "../custom_Hooks/useForm";
/**
 * This is a functional component of the notes textbox. A custom hook is imported to
 * handle updating the words displayed in the textbox and copying the text onto the user's
 * clipboard. This component is used in launches.js. 
 */

export function Notesbox(){

    const {handleChange, input_notes, handleSubmit, textAreaRef} = useForm();
    
    return (
        <form onSubmit={handleSubmit} className="Notes_form">
            <div>
                <label>Notes</label>
                <br></br>
                <br></br>
                <textarea value={input_notes.notes} onChange={handleChange} 
                className="Notes_box" ref={textAreaRef}/>
            </div>
            <br></br>
            <button>Copy This Note To Clipboard</button>
        </form>
    );
}
