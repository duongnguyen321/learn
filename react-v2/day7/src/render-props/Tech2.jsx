import React from "react";
// const newA = (callback, ...args) => {
//   callback(args);
// };
// newA(
//   (prefix) => {
//     const [text, number] = prefix;
//     console.log(`${text} - render-props1 ${number}`);
//     console.log(`${text} - render-props2 ${number}`);
//     console.log(`${text} - render-props3 ${number}`);
//   },
//   "tech2",
//   18
// );
// tác dụng kế thừa logic tránh lặp code
export default class Tech2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
  return <div>{
    this.props.render({
      count: this.state.count,
      increment: this.increment,
      decrement: this.decrement
    })  
  }</div>;
  }
}