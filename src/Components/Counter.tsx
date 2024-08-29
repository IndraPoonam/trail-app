import  { Component } from 'react';
interface CounterState {
  count: number;
}
class Counter extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 2 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 2 });
  };
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment} style={{ margin: '10px', padding: '10px' }}>
          Increment
        </button>
        <button onClick={this.decrement} style={{ margin: '10px', padding: '10px' }}>
          Decrement
        </button>
      </div>
    );
  }
}
export default Counter;