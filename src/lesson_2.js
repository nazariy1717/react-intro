import React from 'react';

export default class Timer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            seconds: 0
        };
        this.tick = this.tick.bind(this);
    }



    componentDidMount(){
        this.timer = setInterval(this.tick, 1000);
    }

    tick(){
        this.setState({
            seconds: this.state.seconds + 1
        });
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }


    render() {
        return (
            <div>Time left {this.state.seconds}</div>
        )
    }
}