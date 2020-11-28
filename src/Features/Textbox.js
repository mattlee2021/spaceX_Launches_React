import React, {Component} from 'react'

/**
 * A class component version of the notes textbox. I refactored this code to a functional
 * component that can be found in NotesBox because I read that functional components 
 * are preferred over class components in industry. The Textbox component is not used 
 * in the app but is here to display an understanding of stateful components. 
 */
export default class Textbox extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            inputNotes:''
        }
    }
    handleInputChange = (event) => { 
        this.setState({
            inputNotes: event.target.value
        })
    }
    handleSubmit = (event) =>{
        this.textArea.select()
        const copied_boolean = document.execCommand('copy');
        event.preventDefault();
        if (copied_boolean==true){
            window.alert(`This note has been copied to the clipboard!`)
        }
    } 
    render(){
        return (
            <form onSubmit={this.handleSubmit} className="Notes_form">
                <div>
                    <label>Notes</label>
                    <br></br>
                    <br></br>
                    <textarea value={this.state.inputNotes} onChange={this.handleInputChange} 
                    className="Notes_box" ref={(textarea) => this.textArea = textarea} />
                </div>
                <br></br>
                <button>Copy This Note To Clipboard</button>
            </form>
        )
    }
}
