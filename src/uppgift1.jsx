import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.handelKlick= this.handelKlick.bind(this);
    }

    handleKlick() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
      }
    render () {
        return(
            <div>
            <p>nummer av klick är: {this.state.count}</p>
            <button onClick={this.handelKlick}>Klicka mig!</button>
            </div>
    )}

}

export default Counter;