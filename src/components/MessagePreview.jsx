import React from 'react';



export default class MessagePreview extends React.Component {

    render() {
        const { title, senderName, onClick } = this.props;
        return (
            <div className="MessagePreview" onClick={onClick}>
                <div className="title">{title}</div>
                <div className="from">{`from ${senderName}`}</div>
            </div>
        );
    }
}


