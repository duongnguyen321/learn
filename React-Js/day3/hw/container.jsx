const root = document.getElementById("root");

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="head">
          <Clock />
        </div>
        <User />
      </div>
    );
  }
}
ReactDOM.render(<Container />, root);
