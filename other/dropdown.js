import React from 'react';


class DropDown extends React.Component {

    constructor(props){
        super(props);
        this.state = { isOpened: false }
    }

    toggleState(){
        this.setState({isOpened: !this.state.isOpened })
    }

    render(){
        console.log('isOpened' + this.state.isOpened);
        let dropdownText;
        if (this.state.isOpened){
            dropdownText = <div>hidden text in</div>
        }
        return (
            <div onClick={this.toggleState.bind(this)}>
                Its dropDown baby
                {dropdownText}
            </div>
        )

    }
}

export default DropDown;