function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bill: "",
      service: "",
      people: "",
      tipAmount: "",
      tipResultDisplay: "none",
      calculatePressed: false,
    };

    this.handleBillChange = this.handleBillChange.bind(this);
    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.handlePeopleChange = this.handlePeopleChange.bind(this);
    this.handleCalculateTip = this.handleCalculateTip.bind(this);
  }

  handleBillChange(event) {
    this.setState({ bill: event });
  }

  handleServiceChange(event) {
    this.setState({ service: event });
  }

  handlePeopleChange(event) {
    this.setState({ people: event });
  }

  handleCalculateTip() {
    if (
      !isNaN(this.state.bill) &&
      !isNaN(this.state.service) &&
      !isNaN(this.state.people)
    ) {
      if (this.state.bill > 0) {
        if (this.state.service > 0) {
          if (this.state.people > 0) {
            var tipAmount =
              (this.state.bill * this.state.service) / this.state.people;
            tipAmount = Math.round(tipAmount * 100) / 100;
            tipAmount = tipAmount.toFixed(2);

            this.setState({
              calculatePressed: true,
              tipResultDisplay: "block",
              tipAmount: tipAmount,
            });
          }
        }
      }
    }
  }

  render() {
    return (
      <div className="content">
        <Header title="Tip Caculator" />
        <TextInput
          label="How much your bill?"
          input={{
            placeholder: "Bill Amount",
            type: "bill",
          }}
          onTextChange={this.handleBillChange}
        />
        <SelectorInput
          input={{
            placeholder: "-- Choose an Option --",
            type: "service",
          }}
          onSelectorChange={this.handleServiceChange}
        />
        <TextInput
          label="How many people are sharing the bill?"
          input={{
            placeholder: "Number of People",
            type: "people",
          }}
          onTextChange={this.handlePeopleChange}
        />
        <button onClick={this.handleCalculateTip}>Calculate!</button>
        <TipResult
          tipAmount={this.state.tipAmount}
          tipResultDisplay={this.state.tipResultDisplay}
        />
      </div>
    );
  }
}
