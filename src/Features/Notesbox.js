import useForm from "../CustomHooks/useForm";
/**
 * This is a functional component of the notes textbox. A custom hook is imported to
 * handle updating the words displayed in the textbox and copying the text onto the user's
 * clipboard. This component is used in launches.js. 
 */

export function Notesbox(){

    const {handleChange_Notes, input_notes, handleSubmit_Notes, textAreaRef} = useForm();
    
    return (
        <form onSubmit={handleSubmit_Notes} className="Notes_form">
            <div>
                <label>Notes</label>
                <br></br>
                <br></br>
                <textarea value={input_notes} onChange={handleChange_Notes} 
                className="Notes_box" ref={textAreaRef}/>
            </div>
            <br></br>
            <button>Copy This Note To Clipboard</button>
        </form>
    );
}
