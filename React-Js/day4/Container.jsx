const root = document.getElementById("root");

class Container extends React.Component {
  render() {
    return <div className="container">
        <Counter />
    </div>;
  }
}
ReactDOM.render(<Container />, root);
