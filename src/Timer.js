import React  from 'react';

export default class TimerWrapper extends React.Component{
    constructor(props){
        super(props);
        this.startTimer = this.startTimer.bind(this);
        this.state = {
            timeLeft: null,
            timer: null
        }
    }

    startTimer(timeLeft){
        clearInterval(this.state.timer);
        let timer = setInterval(()=>{
            var timeLeft = this.state.timeLeft - 1;
            if(timeLeft === 0){
                clearInterval(timer);
            }
            this.setState({
               timeLeft: timeLeft
            });
        },1000);
        return this.setState({
            timeLeft: timeLeft,
            timer: timer
        });
    }

    render(){
        return(
            <div>
                <h2>TIMER</h2>
                <div>
                    <Button time="5" startTimer={this.startTimer}/>
                    <Button time="15" startTimer={this.startTimer}/>
                    <Button time="25" startTimer={this.startTimer}/>
                </div>
                <TimerDisplay timeLeft={this.state.timeLeft}/>
            </div>
        )
    }
}

class Button extends React.Component{
    handleStartTimer(){
        return this.props.startTimer(this.props.time)
    }
    render(){
        return(
            <button onClick={this.handleStartTimer.bind(this)}>
                {this.props.time} second
            </button>
        )
    }
}

class TimerDisplay extends React.Component{
    render(){
        return(
            <h1>Time left: {this.props.timeLeft} </h1>
        )
    }
}