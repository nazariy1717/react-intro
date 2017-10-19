import React from 'react';

export default class NoteEditor extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
    }

    handleTextChange(event){
        this.setState({
            text: event.target.value
        })
    }
    handleNoteAdd(){
        let newNote = {
            text: this.state.text,
            color: 'yellow',
            id: Date.now()
        };

        this.props.onNoteAdd(newNote);
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <div className="note-editor">
                <textarea
                    className="textarea"
                    placeholder="Enter your note here..."
                    rows="5"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />

                <button className="add-button" onClick={this.handleNoteAdd}>ADD</button>
            </div>
        )
    }
}