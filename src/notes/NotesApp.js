import React from 'react';

import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';

export default class NotesApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    id: 0,
                    text: 'Lorem ipsum dolor sit amet, camet, consectetur aonsectetur adipisicing elit. Asperiores, hic.',
                    color: '#FFD700'
                },{
                    id: 1,
                    text: 'Lore fsdf sdfm sd asd asd asd asd asd asd as sum dolor sit a ipd asd asd asd asd asd asd asd asd as sum dolor sit amet, c dasd asonsectetur adipisicing elit. Asperiores, hic.',
                    color: '#456FFC'
                },{
                    id: 2,
                    text: 'Lorem sdf sdf ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, hic.',
                    color: '#cecece'
                },
                {
                    id: 3,
                    text: 'Lorem ipsum dolor sit amet, consec asd asd asd atetur adipisicing elit. Asperiores, hic.',
                    color: '#FFD700'
                },{
                    id: 4,
                    text: 'Lore fsdf sdfm ipd asd asd asd asd asd asd asd asd as sum dolor sit amet, c dasd asonsectetur adipisicing elit. Asperiores, hic.',
                    color: '#456FFC'
                },{
                    id: 5,
                    text: 'Lorem sdf sdf ipsum dolor sit amet, consectetur adipisicing elit.   dolor sit amet, consectetur adipisicin dolor sit amet, consectetur adipisicin Asperiores, hic.',
                    color: '#cecece'
                }
            ]
        };
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
    }

    componentDidMount(){
        let localNotes = JSON.parse(localStorage.getItem('notes'));
        if(localNotes) {
            this.setState({
                notes: localNotes
            });
        }
    }

    handleNoteAdd(newNote){
        let newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({notes: newNotes},);
    }

    render() {
        return (
            <div className="note-app">
                <h2 className="app-header">NotesApp</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid notes={this.state.notes}/>
            </div>
        )
    }

    _updateLocalStorage(){
        let notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes',notes);
    }


}