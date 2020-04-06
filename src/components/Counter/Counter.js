import React,{Component} from 'react';
import '../../App.css';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      showError: false
    }
  }
  decrementCounter = () => {
    if(this.state.counter <= 0) {
      this.setState({
        showError: true
      })
    } else {
      this.setState({
        counter: this.state.counter - 1
      })
    }
  }
  render(){
    return (
      <div data-test="component-app">
        <h1>Unit Testing Counter</h1>
        <h2 data-test="counter-display">The counter is:- {this.state.counter}</h2>
        {
          this.state.showError ? <span>Counter can not be decremented below 0</span> : ''
        }
        <br/>
        <button 
          data-test="increment-button"
          onClick={() => this.setState({
            counter: this.state.counter + 1,
            showError: false
          })}
          >
            Increment counter
          </button>
          <button 
            data-test="decrement-button"
            onClick={() => this.decrementCounter()}
          >
            Decrement counter
          </button>
      </div>
    );
  }
}

export default Counter;
