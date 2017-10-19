import React from 'react';

import Note from './Note';

import Masonry from 'react-masonry-component';

export default class NotesGrid extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var grid = this.refs.grid;
    }

    render() {
        return (
            <div className="notes-grid" ref="grid">
                <Masonry>
                {
                    this.props.notes.map(function (note) {
                        return <Note key={note.id} color={note.color}>{note.text}</Note>;
                    })
                }
                </Masonry>
            </div>
        )
    }
}