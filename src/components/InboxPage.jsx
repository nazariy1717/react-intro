import React from 'react';

import MessagePreview from './MessagePreview';
import PropTypes from 'prop-types';
import messages from '../messages.json';


export default class InboxPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = { messages };
    }



    handlePreviewClick(messageId){
        this.context.router.push(`/inbox/messages/${messageId}`);
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

InboxPage.PropTypes  = {
    router: React.PropTypes.object.isRequired
};
