const Cell = ({ row, cell, value, handleClick }) => {
  return (
    <button className="cell" onClick={() => handleClick(row, cell)}>
      {value}
    </button>
  );
};




class Board extends React.Component {
  board(i) {
    return (
      <Cell
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    return (
      <div>
        <div className="row">
          {this.board(0)}
          {this.board(1)}
          {this.board(2)}
        </div>
        <div className="row">
          {this.board(3)}
          {this.board(4)}
          {this.board(5)}
        </div>
        <div className="row">
          {this.board(6)}
          {this.board(7)}
          {this.board(8)}
        </div>
      </div>
    );
  }
}
