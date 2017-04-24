import React, { Component } from 'react';
import { connect } from 'react-redux';

import FlashMessage from './FlashMessage';

import { deleteFlashMessage } from '../../actions/flashMessagesActions';

class FlashMessagesList extends Component {
    messages() {
        return this.props.messages.map((message) => {
            return <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} />
        });
    }

    render() {
        return (
            <div>
                {this.messages()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);