import React from 'react';

export default class Note extends React.Component {

    // constructor(props){
    //     super(props);
    // }



    render() {
        let style = {
            backgroundColor: this.props.color
        }
        return (
            <div className="note" style={style}>{ this.props.children }</div>
        )
    }
}