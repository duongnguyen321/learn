class SelectorInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onSelectorChange(event.target.value);
  }

  render() {
    return (
      <div>
        <select value="" onChange={this.handleChange}>
          <option disabled selected value="">
            -- Choose an Option --
          </option>
          <option value="0.3">30% </option>
          <option value="0.2">20% </option>
          <option value="0.15">15% </option>
          <option value="0.1">10% </option>
        </select>
      </div>
    );
  }
}
