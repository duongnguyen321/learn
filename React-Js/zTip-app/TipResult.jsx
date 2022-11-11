class TipResult extends React.Component {
  render() {
    const { tipResultDisplay, tipAmount } = this.props;

    return (
      <div className="tipResults" style={{ display: tipResultDisplay }}>
        <p>Total Tip:</p>
        <div>
          <sup>$</sup>
          <span>{tipAmount}</span>
        </div>
      </div>
    );
  }
}
