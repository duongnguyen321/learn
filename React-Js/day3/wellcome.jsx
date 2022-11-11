const root = document.getElementById("root");
class Wellcome extends React.Component {
  constructor() {
    super();
    setTimeout(() => {
      this.setState({
        name: "ABE-Susan0175",
      });
    }, 5000);
  }

  state = {
      name:"Thầy giáo ba"
  }

  render() {
    return (
        <h2>Hello {this.state.name}</h2>
    );
  }
}
ReactDOM.render(<Wellcome />, root);
