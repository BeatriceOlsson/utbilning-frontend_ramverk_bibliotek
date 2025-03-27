import React from "react";

class Timer extends React.Component () {
    constructor(props){
        super(props);
        this.state = {
            seconds:0,
        };
    }

    componentDidMount() {
        this.timer= setInterval(() => {
            this.setState((prevState) => ({
                seconds: prevState.seconds ++,
            }));
        },1000);
    }
    componentWillUmount() {
        clearInterval(this.timer);
    }
    render(){
        <div>
            <p>Secuder {this.state.seconds}</p>
            <button>Klicka mig</button>
        </div>
    }
}
//export default Timer;

function HelowUser ({userName}) {
    console.log('Fungerar');
    return <div>Hej {userName}!</div>
}

export default HelowUser;