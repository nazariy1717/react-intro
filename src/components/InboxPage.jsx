import React from 'react';

import MessagePreview from './MessagePreview';

import messages from '../messages.json';


export default class InboxPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { messages };
    }

    handlePreviewClick(messageId){
        alert(messageId);
    }

    render() {
        return (
            <div className="InboxPage">
                {
                    messages.map(message =>

                        <MessagePreview
                            key={message.id}
                            onClick={this.handlePreviewClick.bind(null, message.id)}
                            title={message.subject}
                            senderName={message.senderName}
                        />
                    )
                }
                <div className='message-container'>
                    {this.props.children}
                </div>
            </div>

        );
    }
}


