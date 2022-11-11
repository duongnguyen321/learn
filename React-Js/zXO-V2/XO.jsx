const App = () => {
  const [turn, setTurn] = React.useState("X");

  const [board, setBoard] = React.useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const [winner, setWinner] = React.useState(null);

  const lines = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],

    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],

    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  const check = (board) => {
    for (const line of lines) {
      const [cell1, cell2, cell3] = line;

      if (
        board[cell1[0]][cell1[1]] &&
        board[cell1[0]][cell1[1]] == board[cell2[0]][cell2[1]] &&
        board[cell3[0]][cell3[1]] == board[cell1[0]][cell1[1]]
      ) {
        return turn;
      }
    }
  };

//  const history = this.state.history;
//  const current = history[this.state.stepNumber];



  const handleClick = (row, cell) => {
    if (winner != null || board[row][cell] != null) {
     return reset()
    }

    const newBoard = { ...board };
    const newRow = { ...board[row] };
    setBoard(newBoard);

    newRow[cell] = turn;
    newBoard[row] = newRow;

    const win = check(newBoard);
    if (win) {
      setWinner(win);
    } else {
      setTurn(turn == "X" ? "O" : "X");
    }
  };

  const reset = () => {
    setTurn("X");
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    setWinner(null);
  };
  //  const moves = history.map((step, move) => {
  //    const desc = move ? "Bước thứ #" + move : "";
  //    return (
  //      <li key={move}>
  //        <button onClick={() => this.jumpTo(move)}>{desc}</button>
  //      </li>
  //    );
  //  });
   

  return (
    <div className="container">
      <h1> {winner ? "Winner : " + winner : "Turn : " + turn} </h1>
      <div className="board">
        <div className="row">
          <Cell
            row={0}
            cell={0}
            value={board[0][0]}
            handleClick={handleClick}
          />

          <Cell
            row={0}
            cell={1}
            value={board[0][1]}
            handleClick={handleClick}
          />
          <Cell
            row={0}
            cell={2}
            value={board[0][2]}
            handleClick={handleClick}
          />
        </div>
        <div className="row">
          <Cell
            row={1}
            cell={0}
            value={board[1][0]}
            handleClick={handleClick}
          />
          <Cell
            row={1}
            cell={1}
            value={board[1][1]}
            handleClick={handleClick}
          />
          <Cell
            row={1}
            cell={2}
            value={board[1][2]}
            handleClick={handleClick}
          />
        </div>
        <div className="row">
          <Cell
            row={2}
            cell={0}
            value={board[2][0]}
            handleClick={handleClick}
          />
          <Cell
            row={2}
            cell={1}
            value={board[2][1]}
            handleClick={handleClick}
          />
          <Cell
            row={2}
            cell={2}
            value={board[2][2]}
            handleClick={handleClick}
          />
        </div>
      </div>
      {/* <div className="game-in4">
        <ol>{moves}</ol>
      </div> */}
    </div>
  );
};

ReactDOM.render(<App />, root);
