import React, {Component} from 'react';
class Textbox extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            input_notes:''
        }
            
    }
    handleInputChange = (event) => {
        this.setState({
            input_notes: event.target.value
        })
    }
    handleSubmit = (event) =>{
        this.textArea.select()
        const copied_boolean = document.execCommand('copy');
        //event.target.focus()
        event.preventDefault();
        if (copied_boolean==true){
            alert(`This note has been copied to the clipboard!`)
        }
    } 
    render(){
        
        return (
            <form onSubmit={this.handleSubmit} className="Notes_form">
                <div>
                    <label>Notes</label>
                    <br></br>
                    <br></br>
                    <textarea value={this.state.input_notes} onChange={this.handleInputChange} 
                    className="Notes_box" ref={(textarea) => this.textArea = textarea} />
                </div>
                <br></br>
                <button>Copy This Note To Clipboard</button>
            </form>

        )
    }
}
export default Textbox