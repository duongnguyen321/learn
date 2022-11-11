const root = document.getElementById("root");

class Clock extends React.Component {
  constructor() {
    super();
    setInterval(()=>{
        this.setState({
          time: new Date(),
        });
    },1000)
  }
  state = {time: new Date() };

  render() {
    return (
      <div className="topbar">
        <h2>Bây giờ là {this.state.time.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
