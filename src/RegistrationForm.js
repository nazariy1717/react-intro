import React  from 'react';

class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('form is submitted. email value: ', this.state.email);
    }

    handleEmailChange(event) {
        console.log('email is changed',event.target.value);
        this.setState({
            email: event.target.value
        })

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <button>Save</button>
            </form>
        )
    }
}

export default RegistrationForm;