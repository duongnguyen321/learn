class Counter extends React.Component {
  state = {
    value: 0,
  };

  decrease = () => this.setState({ value: this.state.value - 1 });

  increase = () => this.setState({ value: this.state.value + 1 });

  reset = () => this.setState({ value: 0 });

  render() {
    return (
      <div>
        <p>Count: {this.state.value}</p>
        <button onClick={this.decrease}>Decrease</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}
