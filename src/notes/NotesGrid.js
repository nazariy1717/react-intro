import React from 'react';

import Note from './Note';

import Masonry from 'react-masonry-component';

export default class NotesGrid extends React.Component {

    // constructor(props) {
    //     super(props);
    // }



    render() {
        console.log(this.props);
        let onNoteDelete = this.props.onNoteDelete;
        return (
            <div className="notes-grid" ref="grid">
                <Masonry>
                    {
                        this.props.notes.map(function(note) {
                            return (
                                <Note
                                    key={note.id}
                                    onDelete={onNoteDelete.bind(null, note)}
                                    color={note.color}>
                                    {note.text}
                                </Note>
                            )
                        })
                    }
                </Masonry>
            </div>
        )
    }
}