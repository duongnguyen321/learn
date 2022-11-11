class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onTextChange(event.target.value);
  }

  render() {
    const { label,  } = this.props;
    const type = this.props.input.type;
    const placeholder = this.props.input.placeholder;

    return (
      <div>
        <p>{label}</p>
        {type === "bill" ? (
          <div>
            <span>{}</span>
            <input
              input={this.type}
              placeholder={placeholder}
              onChange={this.handleChange}
            />
          </div>
        ) : (
          <input
            input={this.type}
            placeholder={placeholder}
            onChange={this.handleChange}
          />
        )}
      </div>
    );
  }
}
